const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();



const userRouter= require("./users/user.router")
const db=require("./database/database")

const PORT = process.env.PORT || 3000;

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))


app.get("/", (req, res) => {
  res.json({
    message: "Server OK",
  });
});

app.use(express.json());
app.use(cors());


app.use('/',  userRouter)


app.listen(PORT, () => {
  console.log(`server starded at port : ${PORT}`);
});
