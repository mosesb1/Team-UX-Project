import { useState, useEffect } from 'react'
import './Inbox.css'
import InboxNavBar from '../../components/Inbox/InboxNavBar'
import InboxMessages from '../../components/Inbox/InboxMessages'
import { createThread, getThread, deleteThread} from '../../utilities/api/message-threads/message-threads-api'
import { createMessage, deleteMessage, getMessagesByUser} from '../../utilities/api/messages/messages-api'
import { useParams, useLocation } from 'react-router-dom'
import { getRoles } from '@testing-library/react'

export default function Inbox({ user, setUser}){

    const [ pageToShow, setPageToShow ] = useState ('InboxAllMail')
    const [ newThread, setNewThread ] = useState(null)
    const [ receiverId, setReceiverId ] = useState(null)
    const [ receiverName, setReceiverName ] = useState(null)
    const [ theMessage, setTheMessage ] = useState("")
    const [ allMessages, setAllMessages ] = useState(null)
    const [ messageToShow, setMessageToShow ] = useState(null)
    const params = useLocation()

    const getParams = () => {
        // console.log(params)
        if (params.state) {
            setPageToShow('InboxComposeMessage')
        }
    }

    // const getTheThread = async () => {
    //     const response = await getThread()
    //     setNewThread(response[1])
    //     sendMessage(response[1])
    // }

    const getAllMessages = async () => {
        console.log(`getting messages for ${user._id}`)
        const response = await getMessagesByUser(user._id)
        console.log(response)
        setAllMessages(response)
    }

    const createNewThread = async () => {
        const users = [user._id, receiverId]
        const usersObj = { users }
        const response = await createThread(usersObj)
        setNewThread(response)
        sendMessage(response)
    }

    const sendMessage = async (aThread) => {
        const response = await createMessage(
            user._id,
            receiverId,
            params.state.senderName,
            receiverName,
            theMessage,
            aThread.createdThread._id,
            params.state.isInvite,
            params.state.projectId,
            params.state.theRole
            )
        // console.log(response)
        // console.log(`Message reply: ${response}`)
    }

    useEffect(() => {
        getParams()
        getAllMessages()
    }, [])

    const loaded = () => {
        return(
        
        <div>
            <div>
                <hr />
            </div>

            <div className='inbox-page'>

                <div className='inbox-navbar'>
                    <InboxNavBar user={user}  setUser={setUser} pageToShow={pageToShow} setPageToShow={setPageToShow} />
                </div>
    
                <div className='inbox-messages'>
                    <InboxMessages
                    user={user} setUser={setUser}
                    pageToShow={pageToShow} setPageToShow={setPageToShow}
                    params={params}
                    receiverId={receiverId} setReceiverId={setReceiverId}
                    theMessage={theMessage}
                    setTheMessage={setTheMessage}
                    createNewThread={createNewThread}
                    allMessages={allMessages} 
                    messageToShow={messageToShow} setMessageToShow={setMessageToShow}
                    setReceiverName={setReceiverName}/>
                </div>        
            
            </div>
        </div>
        )
    }

    const loading = () => {
        return
    }

    return allMessages ? loaded() : loading()
}