const express = require('express');
const {requireSignIn, isAdmin} = require('../middlewares/authMiddleware');
const {registerController, loginController , forgotPasswordController, testController, updateProfileController} = require('../controllers/authCOntroller');


// router to obj
const router = express.Router();

// routing
// Register ||method POST
router.post('/register',registerController);

// Login  || method POST
router.post('/login', loginController);

// Forgot Password || POST
router.post('/forgot-password', forgotPasswordController); 

// test routrs
router.get('/test', requireSignIn, isAdmin ,testController);


// protected route auth
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok: true});
} );


// protected route auth
router.get('/admin-auth', requireSignIn,isAdmin, (req,res) =>{
    res.status(200).send({ok: true});
} );


// update profile
router.put('/profile', requireSignIn, updateProfileController);

module.exports = router;