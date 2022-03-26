import {doc, getDoc, setDoc} from "firebase/firestore/lite";
import faker from "@faker-js/faker";

import {db} from "./init";

export const getSolutionDocRef = (id) => doc(db, "solutions", id || faker.datatype.uuid());

const getSolutionByRef = async (ref) => {
    const res = await getDoc(ref);
    return {...res.data(), id: res.id};
};

export const getSolutionsByRefs = async (refs) => {
    return await Promise.all(
        refs.map(ref => getSolutionByRef(ref))
    );
};

export const createSolutionByReference = async (ref, text) => {
    return await setDoc(ref, {text});
}