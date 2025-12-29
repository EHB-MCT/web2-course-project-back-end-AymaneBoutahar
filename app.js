const express = require('express')
const cors = require("cors")
const connectDB = require("./db")

const app = express()
const port = 3000




app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => { //receive login data from front-end
    const {user, password} = req.body; //destructures username and password
  if (user == "Aymane" && password == "web2") {
    res.send({message: "Login succesful!"});
  } else { 
    res.status(401).send({message: "Error: wrong credentials."})
  }

});


app.post("/register", (req, res) =>{
  console.log("BODY:", req.body);
  
  const {email, password} = req.body; //destructures everything
  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);
  res.send({message: "Registering complete!"})
});



//starts up the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});