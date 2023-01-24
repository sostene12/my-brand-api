// import express from 'express';
// import passport from 'passport';
// const authRoute = express.Router();

// authRoute.get('/login', (req, res, next) => {
//   res.send(
//     '<h1>login<h1> <a href="/auth/google">Sign in with Google</a>'
//   );
// });

// // auth with google
// authRoute.get("/google",passport.authenticate('google',{ scope: ['profile'] }))

// // google callback
// authRoute.get("/google/callback",passport.authenticate('google',{ failureRedirect: '/login' }),(req,res) =>{
//     res.redirect('/');
// })

// export default authRoute;
