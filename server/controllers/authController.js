const UserService = require("../services/userService");

const timeRefreshToken = 15 * 24 * 60 * 60 * 1000;

class AuthController {
  async registration(req, res, next) {
    try {
      const { email, name, password } = req.body;
      const user = await UserService.registration(email, name, password);
      res.cookie("refreshToken", user.refreshToken, {
        httpOnly: true,
        maxAge: timeRefreshToken
      })
      return res.json(user)
    } catch (err) {
      next(err);
    }
  }
  login() {}
  logout() {}
  refresh() {}
}

module.exports = new AuthController();
