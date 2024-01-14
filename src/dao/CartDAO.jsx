import db from "../firebase"
import { addDoc, collection, doc, onSnapshot, setDoc, where, getDocs, query, deleteDoc } from "firebase/firestore";

export const getCartSnapShot = (userId) => {
    let cartList =[]
    onSnapshot(collection(db, "user",userId,"cart"), (snapshot) => {
        snapshot.docs.map((doc) => {
            console.log(doc.data())
            cartList.push({...doc.data(), id: doc.id})
        })
    })
    return cartList
}

export const addItemToCart = async (userId, title, quantity, price) => {
    console.log(userId)
    let cartRef = collection(db, "user",userId,"cart")
    let cartQuery = query(cartRef, where("title", "==", title))
    let querySnapshot = await getDocs(cartQuery)
    if(querySnapshot.empty){
        const payLoad= {title: title, quantity: quantity, price: price}
        addDoc(cartRef, payLoad)
    } else {
        console.log("This is an old item!")
    }
}


export const removeItemFromCart = async (userId, itemId) => {
    await deleteDoc(doc(db, "user", userId, "cart", itemId))
}