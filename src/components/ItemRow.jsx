import { useContext } from "react"
import { CartContext, UserContext } from "./Routes"
import { removeItemFromCart } from "../dao/CartDAO"
import "../styles/itemRow.css"

function ItemRow({itemId, title, price, quantity}) {

    const { cartItems, setCartItems } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)

    const handleCheckOut = (itemId) => {
        removeItemFromCart(user.id, itemId)
        let filteredList = cartItems.filter((cartItem) => cartItem.id !== itemId)
        console.log(filteredList)
        setCartItems(filteredList)
    }

    return (
        <div className="rowContainer">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <div className="quantity">{quantity}</div>
            <div className="amount">{price*quantity}</div>
            <div className="action"><input type="button" value="Checkout" onClick={() => handleCheckOut(itemId)}/></div>
        </div>
    )
}

export default ItemRow