const firebase = require("firebase/app");
require('firebase/auth') 
require('firebase/database') 

var config = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_BUCKET,
  messagingSenderId: process.env.DB_SENDER,
  appId: process.env.DB_APP_ID
};


const app = firebase.initializeApp(config);

const db = app.database();
db.ref("items").push({item: "minecraft"});

module.exports = db;