import InboxAllMail from './InboxAllMail'
import InboxDrafts from './InboxDrafts'
import InboxSent from './InboxSent'
import InboxTrash from './InboxTrash'
import InboxUnread from './InboxUnread'
import InboxComposeMessage from './InboxComposeMessage'
import InboxShowMessage from './InboxShowMessage'
import { useState, useEffect } from 'react'


export default function InboxMessages({ user,
    setUser, pageToShow,  setPageToShow, params, receiverId,
    setReceiverId, setTheMessage, createNewThread, allMessages,
    messageToShow, setMessageToShow, setReceiverName, theMessage }) {

    const pageNavigator = () => {
        if (pageToShow === 'InboxMessages') {
            return <InboxMessages user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxDrafts') {
            return <InboxDrafts user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxAllMail') {
            return <InboxAllMail user={ user } setUser={ setUser }
            allMessages={allMessages} setPageToShow={setPageToShow} messageToShow={messageToShow}
            setMessageToShow={setMessageToShow} />
        } else if (pageToShow === 'InboxSent') {
            return <InboxSent user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxTrash') {
            return <InboxTrash user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxUnread') {
            return <InboxUnread  user={ user } setUser={ setUser } allMessages={allMessages}/>
        } else if (pageToShow === 'InboxComposeMessage') {
            return <InboxComposeMessage  user={ user } setUser={ setUser } params={params}
            receiverId={receiverId} setReceiverId={setReceiverId} theMessage={theMessage} setTheMessage={setTheMessage}
            createNewThread={createNewThread} setReceiverName ={setReceiverName} />
        } else if (pageToShow === 'InboxShowMessage') {
            return <InboxShowMessage user={ user } setUser={ setUser } pageToShow={pageToShow}
            setPageToShow={setPageToShow} messageToShow={messageToShow} setMessageToShow={setMessageToShow} />
        }
    }
    useEffect(() => {

    }, [pageToShow])

    return (
        <div className='messages-to-show'>
            {pageNavigator()}
        </div>
    )
}