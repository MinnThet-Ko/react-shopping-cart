import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext, UserContext } from "./Routes"
import { getCartSnapShot } from "../dao/CartDAO"


function NavBar() {
    const { cartItems, setCartItems } = useContext(CartContext)
    // const { user, setUser } = useContext(UserContext)
    // let totalItems = 0

    // useEffect(()=>{ 
    //     let cartList =getCartSnapShot(user.id)
    //     setCartItems(cartList)
    // }, [])

    
    return (
        <div>
            <Link to="/home">Main Page</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            <h1>{cartItems.reduce((accumulator, object) => {
                return accumulator + object.quantity
            }, 0)}</h1>
        </div>
    )

}

export default NavBar