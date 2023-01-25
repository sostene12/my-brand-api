import Contact from "../models/contact";

class ContactController{
    static async createContact(req,res){
        try {
            const contact = new Contact(req.body);
            await contact.save();
            res.status(201).json({status:"success",data:contact});
        } catch (error) {
            res.status(400).json({status:"error", error:error.message});
        }
    }

    static async deleteContact(req,res){
        try {
            const contact = await Contact.findById(req.params.id);
            if(!contact) return res.status(404).json({status:"fail",message:"The contact is not found"});
            await Contact.findByIdAndDelete(req.params.id);
            res.status(200).json({status:"success",message:"contact deleted"});
        } catch (error) {
            res.status(401).json({status:"error", error:error.message});
        }
    }

    static async getAllContact(req,res){
        try {
            const contacts = await Contact.find();
            res.status(200).json({status:"success",data:contacts});
        } catch (error) {
            res.status(400).json({status:"error",error:error.message});
        }
    }

    static async getContact(req,res){
        try {
            const contact = await Contact.findById(req.params.id);
            if(!contact) return res.status(404).json({status:"fail",message:"The contact is not found"});
            res.status(200).json({status:"success",data:contact});
        } catch (error) {
            res.status(500).json({status:"error",error:error.message});
        }
    }
}

export default ContactController;