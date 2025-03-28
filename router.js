import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "./controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/adduser", addUser);
router.put("/updateuser", updateUser);
router.delete("/deleteuser", deleteUser);

export default router;
