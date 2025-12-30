const {MongoClient} = require("mongodb");


let db; //to store the connection with the database

const connectDB = async() => {
  try{
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