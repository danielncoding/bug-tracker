import {FC, useState} from 'react'

interface LoginProps {
    onLoginClick: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginClick }) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return(
        <>
            <div className="login-main-container">
                <div id="login-items-container">
                    <div id="login-title">
                        <img src="/src/assets/bug.svg" alt="Bug Tracker Logo" className="img_bug" />
                        <p>Bug Tracker</p>
                    </div>
                    <div className="login-form">
                        <div className="input-group">
                            <label >Username:</label>
                            <input type="text" id="username" name="username" onChange={handleUsernameChange}/>
                        </div>
                        <div className="input-group">
                            <label >Password:</label>
                            <input type="password" id="password" name="password" onChange={handlePasswordChange}/>
                        </div>
                        <button onClick={() => onLoginClick(username, password)}>Login</button>
                    </div>
                </div>
                
            </div>  
        </>
    )
}

export default Login