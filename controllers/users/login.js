const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const {User} = require("../../models/user")

const {SECRET_KEY} = process.env;

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.status(409).json({message: "Email or password wrong"});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    
    if(!passwordCompare) {
        return res.status(409).json({message: "Email or password wrong"});
    }
    const payload = {
        id: user._id,
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});
    await User.findByIdAndUpdate(user._id, {token, user});

    res.json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription,
        },
    })
}

module.exports = login;
