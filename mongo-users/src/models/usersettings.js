const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { ObjectID } = require('bson');

const UserSettingsSchema = mongoose.Schema({
    theme: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,

    },
    location: {
        type: String,
        required: true
    },
    user: {
        type: ObjectID,
        required: true,
        ref: 'User'
    }

});


const UserSettings = mongoose.model('UserSettings', UserSettingsSchema);

module.exports = UserSettings;