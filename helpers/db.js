require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL;
const dbName = 'mydb';

let db;

const connectDB = async () => {
 if (db) return db;

 const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

 await client.connect();

 db = client.db(dbName);

 return db;
};

module.exports = connectDB;