require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require('express');
const cors = require("cors");
const connectDB = require("./db");

const app = express();
const port = process.env.PORT || 3000;




app.use(express.json());
app.use(cors());

connectDB();

///////////////////////LOGIN/////////////////////////
app.post("/login", (req, res) => { //receive login data from front-end
    const {user, password} = req.body; //destructures username and password
  if (user == "Aymane" && password == "web2") {
    res.send({message: "Login succesful!"});
  } else { 
    res.status(401).send({message: "Error: wrong credentials."})
  }

});
///////////////////////LOGIN/////////////////////////

///////////////////////REGISTER/////////////////////////
app.post("/register", async (req, res) =>{
  //console.log("BODY:", req.body);
  const {email, password} = req.body; //destructures everything

  if (!email || !password) { //checks if both fields aren't empty
    return res.status(400)
    .send({message: "Please fill in the required fields"})
  } try {
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password, hashedpassword);
      res.send({message: "Registering user succesful!"})

  } catch(error) {
      res.status(500)({message: "Error password hashing"})
  }
});
///////////////////////REGISTER/////////////////////////


//starts up the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});