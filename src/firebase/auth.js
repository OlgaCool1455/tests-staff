import {doc, getDoc, setDoc} from "firebase/firestore/lite";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as logOut} from "firebase/auth";

import {setLocalStorageAuthParams} from "../utils";
import {auth, db} from "./init";

const getUserDocRef = (uid) => doc(db, "users", uid);
const createUser = async (uid, username) => setDoc(getUserDocRef(uid), {username, isAdmin: false});

export const signIn = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = (await getDoc(getUserDocRef(userCredentials.user.uid))).data();

        setLocalStorageAuthParams(email, password);

        return {
            ...userCredentials.user,
            ...user,
        };
    } catch (e) {
        return false;
    }
}

export const signUp = async (email, username, password) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = createUser(userCredentials.user.uid, username);

        setLocalStorageAuthParams(email, password);

        return {
            ...userCredentials,
            ...user,
        }
    } catch (e) {
        return false;
    }
}

export const signOut = async () => {
    try {
        await logOut(auth);
        setLocalStorageAuthParams("", "");

        return true;
    } catch (e) {
        return false;
    }
};