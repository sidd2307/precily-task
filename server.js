// imports
import express from "express";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Connection from "./db.js";

// initialisations
dotenv.config();
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use this after the variable declaration

app.use("/users", route);

// port and mongo connection
const PORT = process.env.PORT || 8000;
const URL =
  "mongodb+srv://admin:admin@cluster0.fax9n.mongodb.net/precilytask_1?retryWrites=true&w=majority";

Connection(process.env.MONGODB_URI || URL);

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'))
}

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
