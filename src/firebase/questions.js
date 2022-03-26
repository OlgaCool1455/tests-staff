import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore/lite";

import {db} from "./init";
import {getTypeById} from "./types";
import {getSolutionDocRef, getSolutionsByRefs, createSolutionByReference} from "./solutions";
import faker from "@faker-js/faker";

const getDocRef = (id) => doc(db, "questions", id || faker.datatype.uuid());
const questionsCollection = collection(db, "questions");
const getQuestionsQuery = (type) => query(questionsCollection, where("type", "==", type));

const getSolutionsAndCreateQuestionObject = async (d) => {
    const questionData = d.data();
    const solutions = await getSolutionsByRefs(questionData.solutions);

    return {...questionData, solutions, id: d.id};
}

export const getQuestionsByType = async (typeId) => {
    const type = await getTypeById(typeId);

    const questionsSnapshot = await getDocs(getQuestionsQuery(type.ref));
    return await Promise
        .all(questionsSnapshot.docs.map(getSolutionsAndCreateQuestionObject));
}

export const addQuestion = async (data) =>{
    const typeRef = (await getTypeById(data.type)).ref;

    const correctSolutionRef = getSolutionDocRef();
    const nonCorrectSolutionsText = data.solutions.filter((s, i) => i !== data.correctSolution);
    const nonCorrectSolutionRefs = nonCorrectSolutionsText.map(getSolutionDocRef);

    // creating correct and non-correct solutions
    await createSolutionByReference(correctSolutionRef, data.solutions[data.correctSolution]);
    await Promise.all(nonCorrectSolutionsText.map(
        (s, i) => createSolutionByReference(nonCorrectSolutionRefs[i], s))
    );

    await setDoc(getDocRef(), {
        text: data.question,
        solutions: [correctSolutionRef, ...nonCorrectSolutionRefs],
        correctSolution: correctSolutionRef,
        type: typeRef,
    });
}