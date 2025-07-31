const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

const User = require('./user.model');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post('/admin', async (req, res) => {
    //console.log("REQ.BODY: ", req.body);
    const {userName, password} = req.body;
    try {
        const admin = await User.findOne({userName});
        if (!admin){
            res.status(404).send({message: "Admin not found."});
        }
        if (admin.password !== password){
            res.status(401).send({message: "Invalid Password!"});
        }

        const token = jwt.sign(
            {id: admin._id, userName: admin.userName, role: admin.role}, 
            JWT_SECRET,
            {expiresIn: '1h'}
        )

        return res.status(200).json({
            message: "Authentication Successful.",
            token: token,
            user: {
                userName: admin.userName,
                role: admin.role
            }
        })
    } catch (error) {
        console.error("Failed to login as admin! ", error);
        res.status(401).send({message: "Failed to login as admin."});
    }
})

module.exports = router;