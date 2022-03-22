import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import {getAuth} from "firebase/auth";
import 'firebase/firestore';
import config from "./firebase.config";

const app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth(app);