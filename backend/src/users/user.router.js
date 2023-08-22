const router =require("express").Router();

const userServices =require('./user.services');

router.route("/users")
.get(userServices.getAllUsers)
.post(userServices.postNewUser);

router.route("/users/:id")
.delete(userServices.deleteUser);


module.exports= router;