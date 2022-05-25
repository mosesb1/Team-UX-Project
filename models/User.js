const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 6,
        required: true
    },
    country: { type: String, required: true },
    usState: { type: String, required: true },
    zipCode: { type: String },
    roles: Array,
    keywordTags: Array,
    profileImageUrl: {
        type: String, 
        default: '/images/ProfilePg/account_circle.png' },
    profileCarousel: Array,
    aboutMe: String,
    websiteUrl: String,
    instagramUrl: String,
    pinterestUrl: String,
    tumblrUrl: String
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model('User', userSchema);