import db from "../firebase"
import { addDoc, collection, doc, onSnapshot, setDoc, query, where, getDocs } from "firebase/firestore";

export const getUserSnapshot = () => {
    let resultSnapshot = new Array
    onSnapshot(collection(db, "user"), (snapshot) => {
        snapshot.docs.map(doc => {
            let user = { ...doc.data(), id: doc.id };
            resultSnapshot.push(user);
        }
        );
    })
    return resultSnapshot
}

export const addNewUser = async ({ email, password }) => {
    const collectionRef = collection(db, "user")
    const payload = { email, password }
    await addDoc(collectionRef, payload)
}

export const updateUser = async (id, email, password) => {
    const docRef = doc(db, "user", id)
    const payload = { email: email, password: password }
    await setDoc(docRef, payload)
}

export const getUser = async (email, password) => {
    const userRef = collection(db, "user")
    const q = query(userRef, where("email", "==", email), where("password", "==", password))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
    console.log(!querySnapshot.empty)
    return !querySnapshot.empty
}