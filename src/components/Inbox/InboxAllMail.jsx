import { useState } from "react" 
import { Link } from "react-router-dom"
import { showMessage } from "../../utilities/api/messages/messages-api"

export default function InboxAllMail({ user, setUser, allMessages, setPageToShow, messageToShow, setMessageToShow }) {

    const showMessage = (theMessage) => {
        setPageToShow('InboxShowMessage')
        setMessageToShow(theMessage)
    }

    const loaded = () => {
        return (
            <table>
                <tr>
                    <td>Check All</td>
                    <td>Mark As Unread</td>
                    <td>Delete</td>
                    <td>Report as Spam</td>
                </tr>
                {
                    allMessages.map((message, idx) => {
                        return (
                            <tr key={idx}>
                                <td><input type='checkbox'/></td>
                                <td>{message.senderName}</td>
                                <td onClick={(e) => {showMessage(message)}}>{message.message}</td>
                                <td>May 2022</td>
                            </tr>
                        )
                    })
                }
            </table>
        )
    }

    const loading = () => {
        return
    }

    return allMessages ? loaded() : loading()
}