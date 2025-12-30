require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require('express');
const cors = require("cors");
const {connectDB} = require("./db");
const {getDB} = require("./db");

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
  };

});
///////////////////////LOGIN/////////////////////////

///////////////////////REGISTER/////////////////////////
app.post("/register", async (req, res) =>{
  //console.log("BODY:", req.body);
  const {name, password} = req.body; //destructures everything

  if (!name || !password) { //checks if both fields aren't empty
    return res.status(400)
    .send({message: "Please fill in the required fields"});
  } try {
    const db = getDB(); //user the existing DB connection
    const usersCollection = db.collection("users"); //selects the users collection
    const userExists = await usersCollection.findOne({name}); //checks if a user has the same name

    if (userExists) {
      return res.status(409).send({message: "This user already exists"}); //this message plays if theres a user with the inputted name
    }
    const hashedpassword = await bcrypt.hash(password, 10);


    //safely stores user
    await usersCollection.insertOne({
      name: name,
      password: hashedpassword
    });
      res.send({message: "Registering user succesful!"});

  } catch(error) {
    console.error(error);
      res.status(500).send({message: "Error password hashing"});
  }
});
///////////////////////REGISTER/////////////////////////


//starts up the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});