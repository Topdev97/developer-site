const express = require("express");
const { AuthService } = require("../services/auth.service.js");
const { checkAuth } = require("../middlewares/auth.jwt.js");
const { UserService } = require("../services/user.service.js");

const router = express.Router();
const authService = new AuthService();
const userService = new UserService();
router.post("/login", async (req, res, next) => {
  try {
    const {email,password} = req.body;

    const user = await authService.getUser(email,password)
    const payload = await authService.signToken(user)
    delete payload.user.dataValues.recoveryToken
    
    res.json(payload);
  } catch (error) {
    next(error);
  }
});
router.post("/recovery", async (req, res, next) => {
  try {
    const {email} = req.body;
    const rta =await authService.sendRecovery(email)

    res.json(rta);
  } catch (error) {
    next(error);
  }
});
router.patch("/change-password", async (req, res, next) => {
  try {
    const {token,newPassword} = req.body;
    const rta =await authService.changePassword(token,newPassword)
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

router.get("/profile", checkAuth, async (req, res, next) => {
  try {
    const { sub } = req.payload;
    
    const user = await userService.findOne(sub);
    delete user.dataValues.recoveryToken
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
