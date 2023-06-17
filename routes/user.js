import express from "express";

import { createUser,  deleteUserById,  getAllUsers, getUserById } from "../controllers/user.js";
const router = express.Router()

router.get("/all",getAllUsers)

router.post("/new",createUser)

router.route("/userid/:id").get(getUserById).delete(deleteUserById)



export default router