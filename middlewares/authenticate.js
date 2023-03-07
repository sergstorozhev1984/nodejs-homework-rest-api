const jwt = require("jsonwebtoken");

const {User} = require("../models/user");

const {SECRET_KEY} = process.env;

const authenticate = async (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const [bearer, token] = authorization.split(" ");
        if(bearer !== "Bearer") {
            return res.status(401).json({error: "Unauthorized"});
        }
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user || !user.token || user.token !== token) {
            return res.status(401).json({error: "Unauthorized"});
        }
        req.user = user;
        next();
    } catch (e) {
        if(!e.status) {
            e.status = 401;
            e.message = "Unauthorized";
        }
        next(e)
    }
}

module.exports = authenticate;