import express from "express"
import homecontroller from "../controllers/homecontroller";

const homerouter = express.Router();

router.get("/",homecontroller)

export default homerouter;