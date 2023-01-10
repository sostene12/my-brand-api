import Contact from "../models/contact";

class ContactController{
    static async createContact(req,res){
        try {
            const contact = new Contact(req.body);
            await contact.save();
            res.status(201).json(contact);
        } catch (error) {
            res.status(401).json({error:error.message});
        }
    }
}

export default ContactController;