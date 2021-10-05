// imports
import express from "express";
const route = express.Router();
import { getUsers, addUser, getUserById, editUser, deleteUser } from "../controller/userController.js";

// routes
route.get("/", getUsers);
route.post("/add", addUser)
route.get("/:id", getUserById)
route.put("/:id", editUser)
route.delete("/:id", deleteUser)

export default route;
