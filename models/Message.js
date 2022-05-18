const mongoose = require('mongoose');
const messageSchema = require('./MessageSchema');




module.exports = mongoose.model('Message', messageSchema);