const {User} = require("../../models/user")

const updateSubscription = async(req, res)=> {
  const { id } = req.params;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(id, { subscription }, { new: true });
    res.json({
        user: {
            email: user.email,
            subscription: user.subscription,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    });
}

module.exports = updateSubscription;