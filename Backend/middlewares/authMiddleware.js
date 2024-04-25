const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Protected route token based
const requireSignIn = async (req,res,next) => {
    try {
        let token= req.headers.authorization;
        token = token.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        next();

    } catch (error) {
        console.log(error);
    }
}

// admin access
const isAdmin = async (req,res,next) =>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: 'Unauthorised Access',
                
            });
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Error in AdminMiddleware',
            error
        });
    }
}

module.exports = {requireSignIn, isAdmin};