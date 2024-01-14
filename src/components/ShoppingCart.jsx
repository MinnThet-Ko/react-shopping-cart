import { useContext, useEffect } from "react";
import NavBar from "./NavBar"
import { CartContext, UserContext } from "./Routes";
import { removeItemFromCart, getCartSnapShot } from "../dao/CartDAO";
import Item from "./Item";

function ShoppingCart() {

    const { cartItems, setCartItems } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)

    const handleCheckOut = (itemId) => {
        removeItemFromCart(user.id, itemId)
        let filteredList = cartItems.filter((cartItem) => cartItem.id !== itemId)
        setCartItems(filteredList)
    }

    return (
        <>
            <NavBar/>
            
            <h1>Shopping Cart</h1>
            <table>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    cartItems.map((cartItem) => {
                         return <tr key={cartItem.title}>
                            <td>{cartItem.title}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.price}</td>
                            <td>{cartItem.quantity * cartItem.price}</td>
                            <td><input type="button" value="Checkout" onClick={() => handleCheckOut(cartItem.id)}/></td>
                        </tr>
                    })
                } 
                
                </tbody>
            </table>           
        </>
    );
}

export default ShoppingCart