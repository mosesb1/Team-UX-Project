import { useState, useEffect } from 'react'

export default function InboxNavBar({ user, setUser, pageToShow,  setPageToShow}) {

    return (
        <div>
            <div className='inbox-header'>
                <h1>Inbox</h1>
            </div>

        

        <div className='inbox-navbar-categories'>
            <button onClick={(e) => {setPageToShow('InboxUnread')}}>Unread</button><br/>
            <button onClick={(e) => {setPageToShow('InboxAllMail')}}>All Mail</button><br/>
            <button onClick={(e) => {setPageToShow('InboxSent')}}>Sent</button><br/>
            <button onClick={(e) => {setPageToShow('InboxDrafts')}}>Drafts</button><br/>
            <button onClick={(e) => {setPageToShow('InboxTrash')}}>Trash</button>
        </div>

        </div>
    )
}