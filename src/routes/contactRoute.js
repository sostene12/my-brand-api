import express from "express";
import ContactController from "../controllers/contactController";

const contactRoute = express.Router();

contactRoute.post("/create",ContactController.createContact);
contactRoute.delete("/delete/:id",ContactController.deleteContact);
contactRoute.get("/all",ContactController.getAllContact);
contactRoute.get("/:id",ContactController.getContact);

export default contactRoute;