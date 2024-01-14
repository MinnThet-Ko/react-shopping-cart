import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext, CartContext} from "./Routes";
import { getUserSnapshot } from "../dao/UserDAO";
import { getCartSnapShot } from "../dao/CartDAO";
import "../styles/loginPage.css"

function LoginPage() {

    const navigation = useNavigate();

    useEffect(() => {        
       setUsers(getUserSnapshot())
    }, [])

    //Context
    const { user, setUser } = useContext(UserContext)
    const { cartItems, setCartItems } = useContext(CartContext)

    //States
    const [users, setUsers] = useState([])

    //Event handlers
    const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }

    const handlePasswordChange = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    const handleLogin = () => {
        let filteredUser = users.find(u => u.email === user.email && u.password === user.password)
        
        if (filteredUser != undefined) {
            setUser(filteredUser)
            setCartItems(getCartSnapShot(filteredUser.id))
            navigation("/home")
        } else {
            setUser({ ...user, email: "", password: "" })
            alert("Wrong email or password!")
        }
    }

    return (
        <div className="loginContainer">
            <div className="loginInputContainer">
                <label about="email">Email:</label>
                <input type="text" name="email" value={user.email} onChange={handleEmailChange} />
            </div>

            <div className="loginInputContainer">
                <label about="password">Password:</label>
                <input type="text" name="password" value={user.password} onChange={handlePasswordChange} />
            </div>
            <input type="button" value="Login" onClick={handleLogin} />
            <Link to="/register">Register</Link>
        </div>
    )
}

export default LoginPage;