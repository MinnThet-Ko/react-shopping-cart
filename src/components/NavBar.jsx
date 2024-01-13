import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./Routes"

function NavBar() {
    const { cartItems, setCartItems } = useContext(CartContext)

    let totalItems = 0
    cartItems.forEach((cartItem) => {
        totalItems += cartItem.quantity
    })
    return (
        <div>
            <Link to="/home">Main Page</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            <h1>{totalItems}</h1>
        </div>
    )

}

export default NavBar