import { verify } from "../helpers/jwt";

export const verifyToken = (req,res,next) =>{
    try {
        const authHeader = req.headers.token;
        const token = authHeader.split(' ')[1];
        if(!token) return res.status(401).json("You are not Authenticated!");
        const verified = verify(token);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({status:"error",error:error.message});
    }
}