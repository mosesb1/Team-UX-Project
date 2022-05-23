const { Schema } = require('mongoose');

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    senderName: {
        type: String,
        required: true
    },
    receiverName: {
        type: String,
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    message: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    isRead: {
        type: Boolean,
        default: false
    },
    isInvite: {
        type: Boolean,
        default: false
    },
    thread: {
        type: Schema.Types.ObjectId,
        ref: 'MessageThread',
        required: true
    }
   
}, {
    timestamps: true
})

module.exports = messageSchema;