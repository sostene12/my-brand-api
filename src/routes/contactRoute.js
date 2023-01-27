import express from "express";
import ContactController from "../controllers/contactController";
import { verifyTokenAndRole } from "../middlewares/authenticate";

const contactRoute = express.Router();

contactRoute.post("/create",ContactController.createContact);
contactRoute.get("/all",verifyTokenAndRole,ContactController.getAllContact);
contactRoute.get("/:id",verifyTokenAndRole,ContactController.getContact);
contactRoute.delete("/delete/:id",verifyTokenAndRole,ContactController.deleteContact);
export default contactRoute;