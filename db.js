const credentials = require("./dbcredentials")
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${credentials.username}:${credentials.password}@register.wdqytym.mongodb.net/?appName=register`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db = null //to store the connection with the database

async function connectDB() { //waits for results
  //if connected we await for a promise result
  if (!db) {
    await client.connect();

    db = client.db("ragnadb");

    console.log("Succesfully connected to MongoDB!");
  }

  return db;  //return db to routes so they can start working
}

module.exports = connectDB; //export function so it can be reused in app.js