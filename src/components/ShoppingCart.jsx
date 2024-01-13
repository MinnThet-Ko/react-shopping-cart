import { useContext } from "react";
import NavBar from "./NavBar"
import { CartContext } from "./Routes";

function ShoppingCart() {

    const { cartItems, setCartItems } = useContext(CartContext)

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
                        </tr>
                    })
                }  
                </tbody>
            </table>           
        </>
    );
}

export default ShoppingCart