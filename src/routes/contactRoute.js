import express from "express";
import ContactController from "../controllers/contactController";
import { verifyToken } from "../middlewares/authenticate";

const contactRoute = express.Router();

contactRoute.post("/create",ContactController.createContact);
contactRoute.get("/all",verifyToken,ContactController.getAllContact);
contactRoute.get("/:id",verifyToken,ContactController.getContact);
contactRoute.delete("/delete/:id",verifyToken,ContactController.deleteContact);
export default contactRoute;