const sendEmail = require("../../helpers/sendEmail");
const {User} = require("../../models/user");

const {BASE_URL} = process.env;

const resendEmail = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.status(400).json({message: "missing required field email"})
    }
    if(user.verify) {
        return res.status(400).json({message: "Verification has already been passed"})
    }
    const mail = {
        to: email,
        subject: "Verify Email",
        html: `<a target="_blanc" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify your email!</a>`
    }
    await sendEmail(mail);

    res.json({message: "Verification email sent"})
}

module.exports = resendEmail;