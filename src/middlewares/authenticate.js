import { verify } from "../helpers/jwt";

export const verifyToken = (req,res,next) =>{
    const token = req.headers.token;
    if(!token) return res.status(401).json("You are not Authenticated!");
    const verified = verify(token);
    req.user = verified;
    next();
}