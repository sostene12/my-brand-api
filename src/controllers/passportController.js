// import GooglePassport from "passport-google-oauth20";
const GoogleStrategy = require('passport-google-oauth20').Strategy
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config(); 

// const GoogleStrategy = GooglePassport.Strategy

export const passportAuth = (passport) =>{
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },
      async (accessToken, refreshToken, profile, cb) =>{
        console.log(profile)
        // User.findOrCreate({ _id: profile.id },(err, user) => cb(err, user));
      }
    ));
    
    passport.serializeUser((user, cb) => process.nextTick(() => cb(null, { id: user.id, username: user.username, name: user.name }))); 
    passport.deserializeUser((user, cb) =>process.nextTick(() => cb(null, user)));
}