import {collection, doc, getDocs, setDoc, deleteDoc, getDoc} from "firebase/firestore/lite";
import {db} from "./init";

const coll = collection(db, "types");
const getTypesDocRef = (id) => doc(db, "types", id);

export const getAllTestTypes = async () => {
    const typesSnapshot = await getDocs(coll);
    return typesSnapshot.docs.map(d => ({id: d.id, ...d.data()}));
}

export const getTypeById = async (id) => await getDoc(getTypesDocRef(id));

export const addType = async (text) => {
    await setDoc(doc(db, "types"), {text});
}

export const deleteType = async (id) => {
    await deleteDoc(doc(db, "types", id));
}