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

    static async deleteContact(req,res){
        try {
            await Contact.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"contact deleted"});
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }

}

export default ContactController;