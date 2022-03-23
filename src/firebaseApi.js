import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, setDoc, doc, query, where, getDoc} from 'firebase/firestore/lite';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut as logOut} from "firebase/auth";
import 'firebase/firestore';
import config from "./firebase.config";
import {setLocalStorageAuthParams} from "./utils";

const app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth(app);


const getUserDocRef = (uid) => doc(db, "users", uid);

const createUser = async (uid, username) => setDoc(getUserDocRef(uid), {username});

export const signIn = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = await getDoc(getUserDocRef(userCredentials.user.uid));

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

const questionsCollection = collection(db, "questions");
const getQuestionsQuery = (type) => query(questionsCollection, where("type", "==", type));

export const getQuestionsByType = async (type) => {
    const questionsSnapshot = await getDocs(getQuestionsQuery(type));
    return questionsSnapshot.docs.map(d => d.data());
}

export const addQuestion = async (text, solutions, rightSolution) =>{
    await setDoc(doc(db, "questions"), {text, solutions, rightSolution});
}

const typesCollection = collection(db, "types");

export const getAllTypes = async () => {
    const typesSnapshot = await getDocs(typesCollection);
    return typesSnapshot.docs.map(d => d.data());
}

export const addType= async (text) =>{
    await setDoc(doc(db, "types"), {text});
}