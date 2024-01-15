import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext, UserContext } from "./Routes"
import { getCartSnapShot } from "../dao/CartDAO"
import { FaShoppingCart, FaHome } from "react-icons/fa"
import "../styles/navbar.css"


function NavBar() {
    const { cartItems, setCartItems } = useContext(CartContext)

    return (
        <div className="navBarContainer">

            <h1 className="navBarItem shopName">Shopie</h1>

            <Link to="/home" className="navBarItem"><FaHome/> Main Page</Link>
            <Link to="/cart" className="navBarItem cartDisplay">
                <div>
                <FaShoppingCart />Cart({cartItems.reduce((accumulator, object) => { return accumulator + object.quantity }, 0)})
                </div>
            </Link>
            <Link to="/profile" className="navBarItem">Profile</Link>

        </div>
    )

}

export default NavBar