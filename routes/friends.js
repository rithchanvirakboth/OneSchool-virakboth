const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/User");

// @route     Post api/friends/follower
// @desc      Get searched users
// @access    Private
router.post("/following", auth, async (req, res) => {
  const { username } = req.body;

  try {
    let targetUser = await User.findOne({ username });
    if (!targetUser)
      return res.status(404).json({ msg: "This user does not exist!" });

    //Getting user ID
    const targetUserId = targetUser._id;

    let currentUser = await User.findById(req.user.id);
    // Check if currentUser already follow that user
    if (currentUser.followings.includes(targetUserId))
      return res.status(403).json({ msg: "You already follow this user!" });
    targetUser = await User.findByIdAndUpdate(
      targetUserId,
      { $push: { followers: req.user.id } },
      { new: true }
    );
    currentUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: { followings: targetUserId },
      },
      { new: true }
    );
    res.json({ currentUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error!" });
  }
});

module.exports = router;
