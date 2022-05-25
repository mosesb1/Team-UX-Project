 import { useEffect, useState } from "react"
 import { useParams } from "react-router-dom"
import { getUnreadMessages } from "../../utilities/api/messages/messages-api"

export default function InboxUnread({ user, setUser , setTheMessage, setMessageToShow, allMessages  }) {
    const [ unread, setUnread ] = useState({})

const params = useParams()
const messageId = params.id


    const GetMessage = async () => {
        try{
            const response = await getUnreadMessages(messageId)
            setUnread(response.messages)
            console.log(unread)
            }
        catch(error){
            console.log(error)
            }
    }



    const unreadMessageList = allMessages.filter(message => !message.isRead).map((message, idx) => {
        return( 
            <tr key={idx}>
                <td><input type='checkbox'/></td>
                <td>{message.senderName}</td>
                <td>May 2022</td>
            </tr>
        )
    })

    useEffect(() => {
        GetMessage()
    }, [])
    
    return(
        <div>
            {unreadMessageList}
        </div>
        
        
    )
    
}