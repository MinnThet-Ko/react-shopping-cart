import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../dao/UserDAO";
import "../styles/loginPage.css"

function RegisterPage() {

    const navigation = useNavigate();

    //States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = () => {
        addNewUser({email, password})
        navigation("/")
    }

    return (
        <div className="loginContainer">
            <div className="loginInputContainer">
                <label about="email">Enter email:</label>
                <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="loginInputContainer">
                <label about="password">Enter password:</label>
                <input type="text" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <input type="button" value="Register" onClick={handleRegister} />
        </div>
    )
}

export default RegisterPage;