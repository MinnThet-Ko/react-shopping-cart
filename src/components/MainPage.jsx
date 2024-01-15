import { useState, useEffect } from "react";
import NavBar from "./NavBar"
import Item from "./Item";
import "../styles/mainPage.css"

function MainPage() {

    const [shopItems, setShopItems] = useState([])

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products'/*, {
                mode: 'no-cors'
            }*/)
                .then(res => res.json())
                .then(json => {
                    setShopItems(json)
                })
        }
        , [])

    return (
        <>
            <NavBar />
            <div className="itemContainter">
                {
                    shopItems.map((shopItem) => {
                        return <Item key={shopItem.id} itemImage={shopItem.image} itemTitle={shopItem.title} itemPrice={shopItem.price} />
                    })
                }
            </div>
        </>
    );
}

export default MainPage