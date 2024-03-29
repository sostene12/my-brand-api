import mongoose, { mongo } from "mongoose";

const contactSchema = mongoose.Schema({
    fullName:{
        type:String,
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    }
});

const Contact = mongoose.model('Contact',contactSchema);

export default Contact;