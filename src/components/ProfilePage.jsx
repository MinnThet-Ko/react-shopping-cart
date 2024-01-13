import { useContext } from "react";
import { UserContext } from "./Routes";
import "../styles/loginPage.css"
import { updateUser } from "../dao/UserDAO";

function ProfilePage() {

    //Context
    const { user, setUser } = useContext(UserContext)

    //Event handlers
    const handleEmailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }

    const handlePasswordChange = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    const handleProfileUpdate = async () => {
        updateUser(user.id, user.email, user.password)
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
            <input type="button" value="Update profile" onClick={handleProfileUpdate} />
        </div>
    )
}

export default ProfilePage;