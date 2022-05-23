const express = require('express')
const router = express.Router()
const { getSendMessage, getReceiveMessage, setMessage, deleteMessage, updateMessage, showMessage, getMessagesByUser } = require('../../controllers/api/messages')

router.get("/sent/:userId", getSendMessage) 
//
router.get("/received/:userId", getReceiveMessage)
// all
router.get("/all/:userId", getMessagesByUser)

router.post('/:threadId', setMessage)
//  Update
router.put('/:id', updateMessage)
// delete
router.delete('/:id', deleteMessage)

//show
router.get('/:id', showMessage)


module.exports = router;