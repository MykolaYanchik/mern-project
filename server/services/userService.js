const bcrypt = require("bcrypt");

const UserModel = require("../models/userModel");
const ApiError = require("../utils/errors");
const TokenService = require("./tokenService");

class UserService {
  async registration(email, name, password) {
    const uniqueEmail = await UserModel.findOne({ email });
    const uniqueName = await UserModel.findOne({ name });
    if (uniqueEmail) {
      throw new ApiError(400, "Користувач з такими email вже існує.");
    }

    if (uniqueName) {
      throw new ApiError(400, "Користувач з такими іменем вже існує.");
    }

    const hashPassword = await bcrypt.hash(password, 7);

    const user = await UserModel.create({
      email,
      name,
      password: hashPassword,
    });

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const tokens = TokenService.generateTokens(payload);
    await TokenService.saveToken(user._id, tokens.refreshToken);

    return { user, ...tokens };
  }
}

module.exports = new UserService();
