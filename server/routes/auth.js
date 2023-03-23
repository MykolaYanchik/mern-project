const Router = require("express");

const controller = require("../controllers/authController");

const router = new Router();

router.post("/user/registration", controller.registration);
router.post("/user/login", controller.login);
router.post("/user/logout", controller.logout);
router.get("/user/refresh", controller.refresh);

module.exports = router;
