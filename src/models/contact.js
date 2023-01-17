import mongoose, { mongo } from "mongoose";

const contactSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const Contact = mongoose.model('Contact',contactSchema);

export default Contact;