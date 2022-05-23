import { useState, useEffect } from 'react'
import { getUsers } from '../../utilities/api/users/users-api'

export default function InboxComposeMessage({ user, setUser, pageToShow,  setPageToShow,
    params, receiverId, setReceiverId, theMessage, setTheMessage, createNewThread, setReceiverName }) {
    const [ userList, setUserList ] = useState([])

    const getTheUsers = async () => {
        const response = await getUsers()
        setUserList(response)
        setReceiverId(response[0]._id)
        setReceiverName(response[0].firstName)
        // console.log(response) // print user list
    }

    const handleChange = (event) => {
        // console.log(event)
        const arr = event.target.value.split('/')
        console.log(arr)
        setReceiverId(arr[0])
        setReceiverName(arr[1])
    }

    const handleSubmit = (event) => {
        createNewThread()
    }

    const roleToInvite = () => {
        
        
    }

    const doNothing = () => {
        return
    }
    
    useEffect(() => {
        getTheUsers()
        const inviteText = `Hey! do you want to collaborate on my project- ${params.state.projectName}, as a ${params.state.theRole}?`
        setTheMessage(inviteText)
    },[])

    useEffect (() => {

    }, [receiverId])

    const loaded = () => {
        return (
            <div>
                <h2>To:</h2>
                <select className='select-receiver-dropdown' name='receiver' value='' onChange={handleChange}>
                {
                    userList.map((aUser, idx) => {
                        return (
                            aUser.firstName === user.firstName ?
                            doNothing()
                            :
                            <option value={`${aUser._id}/${aUser.firstName} ${aUser.lastName}`} key={idx}>
                                {aUser.firstName} {aUser.lastName}
                            </option>
                        )
                    })
                }       
                </select>
                <h2>Message:</h2>
                <textarea onChange={(e) => {setTheMessage(e.target.value)}}>{theMessage}</textarea>
                <button onClick={handleSubmit}>Send</button>
            </div>
        )
    }

    const loading = () => {
        return
    }

    return userList && userList[0] ? loaded() : loading () 
}