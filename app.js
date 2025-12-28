const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000


app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
    const {user, password} = req.body;
  if (user == "Aymane" && password == "web2") {
    res.send("Login succesful");
  } else { 
    console.error(error)
    res.status(500).send("Error reading user/password")
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})