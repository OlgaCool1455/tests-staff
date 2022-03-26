import React, {useContext, useState} from 'react';
import {useParams} from "react-router";
import useAsyncEffect from "use-async-effect";

import {LoaderContext} from "../App";
import {getTypeById} from "../firebase/types";
import {getQuestionsByType} from "../firebase/questions";
import TestPassingQuestions from "../components/testsPassing/TestPassing";

const TestPassing = () => {
    const {testTypeId} = useParams();

    const {setIsLoading} = useContext(LoaderContext);

    const [questions, setQuestions] = useState([]);
    useAsyncEffect(async () => {
        setIsLoading(true);
        const res = await getQuestionsByType(testTypeId);
        setQuestions(res);
        setIsLoading(false);
    }, []);

    const [testType, setTestType] = useState(null);
    useAsyncEffect(async () => {
        const res = await getTypeById(testTypeId);
        setTestType(res);
    }, []);

    return (
        <>
            <TestPassingQuestions questions={questions} testType={testType}/>
        </>
    );
};

export default TestPassing;