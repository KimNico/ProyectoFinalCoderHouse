let express=  require("express")
let userController = require("../components/users");

let router = express.Router();

router.get("/",userController.getuser);
router.post("/login",userController.loginUser);
router.post("/register",userController.registerUser);

module.exports = router