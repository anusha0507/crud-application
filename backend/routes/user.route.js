import express from "express";
import {create, getAll, getUser} from "../controller/user.controller.js"

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getUser/:id", getUser);

export default route;