import express from "express"
import homecontroller from "../controllers/homecontroller.js";
import cataloguecontroller from "../controllers/cataloguecontroller.js";
import pageProduitController from "../controllers/pageproduitcontroller.js";

const router = express.Router();

router.get("/",homecontroller.homePage);
router.get("/catalogue", cataloguecontroller.cataloguePage);
router.get("/catalogue/voir", cataloguecontroller.voirToutPage);
router.get("/catalogue/:coffeeId", pageProduitController.pageProduit);

export default router;