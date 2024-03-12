import express from "express";
import { addUser, getUsers } from "../controllers/user-controller";

const router = express.Router()

router.get("/",getUsers)
router.post("/addUser",addUser)

export default router