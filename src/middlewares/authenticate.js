import { verify } from "../helpers/jwt";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req,res,next) =>{
    try {
        const authHeader = req.headers.token;
        if(!authHeader){
            return res.status(401).json({status:"error",error:"You are not authenticated"});
        }
        const token = authHeader.split(' ')[1];
        if(!token) return res.status(401).json({status:"error",error:"You are not authenticated"});
        const verified = verify(token);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({status:"error",error:error.message});
    }
}

export const verifyTokenAndRole = (req,res,next) =>{
    verifyToken(req,res,() =>{
        if(req.user.role.includes('admin')){
            next();
        }
        else{
            return res.status(401).json({status:"error",error:"You are not authenticated"});
        }
    })
}