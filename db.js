const {MongoClient} = require("mongodb");
console.log("db.js has loaded")

let db; //to store the connection with the database

//attempts to make a connection with MongoDB
const connectDB = async() => {
  try{
        console.log("connectDB")
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("MongoDB has been connected.");
  } catch(error) {
    console.error("Connection to MongoDB failed.");
    process.exit(1);
  }
}

const getDB = () => {
  if (!db) {
    throw new Error("Database not found");
  }
  return db;
}

module.exports = {connectDB, getDB}; //export function so it can be reused in app.js