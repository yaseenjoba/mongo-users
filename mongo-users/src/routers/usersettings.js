const UserSettings = require("../models/usersettings")
const express = require('express');
const router = new express.Router();


router.post('/usersettings', async(req, res) => {
    user = {
        "theme": "dark",
        "language": "arabic",
        "location": "hebron",
        "user": "608141f06350285604f2d1a2",
        "ref": "user"
    };
    const myUserSettings = new UserSettings(user);
    myUserSettings.populate('user').execPopulate()


    try {
        await myUserSettings.save();
        res.status(201).send(myUserSettings);
    } catch (error) {
        res.status(400).send(error);
    }

})
router.get('/usersettings', async(req, res) => {

    try {
        const myUserSettings = await UserSettings.findById("60814b7797476f2848ef56c6");
        await myUserSettings.populate('user').execPopulate()
        console.log(myUserSettings)
        res.send(myUserSettings);
    } catch (error) {
        res.status(500).send();
    }

    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send();
    // })
})
module.exports = router;