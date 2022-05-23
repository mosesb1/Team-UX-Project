import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx"
import { useState } from "react";

export default function AuthPage({ user, setUser }){
    
    return(
        <main>

            <div>
                <hr/>
            </div>
            
            <div>
                <SignUpForm user={user} setUser={setUser} />
            </div>

        </main>
    )

}