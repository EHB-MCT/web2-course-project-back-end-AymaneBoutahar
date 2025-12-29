const express = require('express')
const cors = require("cors")
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

//starts up the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})