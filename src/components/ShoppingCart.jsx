import NavBar from "./NavBar"
import ItemRow from "./ItemRow"
import { useContext } from "react";
import { CartContext } from "./Routes";
import "../styles/shoppingCart.css"

function ShoppingCart() {

    const { cartItems, setCartItems } = useContext(CartContext)
    return (
        <>
            <NavBar />
            <div className="cart">
                <div className="headerRow">
                    <div className="headerItem"> Item </div>
                    <div className="headerPrice"> Price </div>
                    <div className="headerQuantity"> Quantity </div>                    
                    <div className="headerAmount"> Amount </div>
                    <div className="headerAction"></div>
                </div>
                {
                    cartItems.map((cartItem) => {return <ItemRow key={cartItem.id} itemId = {cartItem.id} title={cartItem.title} price={cartItem.price} quantity={cartItem.quantity}/>})
                }
            </div>

        </>
    );
}

export default ShoppingCart