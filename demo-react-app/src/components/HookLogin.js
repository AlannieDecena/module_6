import React, { useState } from "react";
import {Hello} from '../components/Hello';


function HookLogin() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loggedIn, setLoggedIn] = React.useState(false)

   const handleLogin = (e) => {
        e.preventDefault();
        console.log(username+ ' '+password)

        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)

       setLoggedIn(isLoggedIn)
    }

   const handleInputChange = (event) => {
        const target = event.target;
        console.log(target)
    
    if(target.name === 'username') {
        setUsername(target.value)
    }

    if(target.name === 'password') {
        setPassword(target.value)
    }

 

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? <Hello name={username}/> : 'Please log in'}</div>

            {!loggedIn &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Username: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    {/* add another form field for email address */}

                    <div className="formRow">
                        <label htmlFor="password">Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input type="password" id="password" name="password" value={password} onChange={handleInputChange } />
                    </div>
                    
                    <button>Login</button>
                </form>
            }
            
        </div>
    );
}
}

export default HookLogin