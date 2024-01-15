import db from "../firebase"
import { addDoc, collection, doc, onSnapshot, setDoc, where, getDocs, query, deleteDoc, updateDoc, increment } from "firebase/firestore";

export const getCartSnapShot = (userId) => {
    let cartList =[]
    onSnapshot(collection(db, "user",userId,"cart"), (snapshot) => {
        snapshot.docs.map((doc) => {
            cartList.push({...doc.data(), id: doc.id})
        })
    })
    return cartList
}

export const addItemToCart = async (userId, title, quantity, price) => {
    let cartRef = collection(db, "user",userId,"cart")
    let cartQuery = query(cartRef, where("title", "==", title))
    let querySnapshot = await getDocs(cartQuery)
    let docRef = new Object
    if(querySnapshot.empty){
        const payLoad= {title: title, quantity: quantity, price: price}
        docRef = await addDoc(cartRef, payLoad)
    } else {
        docRef = doc(db, "user", userId, "cart", querySnapshot.docs.at(0).id)
        await updateDoc(docRef, {quantity: increment(quantity)})
    }

    return docRef.id
}


export const removeItemFromCart = async (userId, itemId) => {
    await deleteDoc(doc(db, "user", userId, "cart", itemId))
}