import React, {useEffect, useRef, useState} from 'react';
import {Carousel, Space, Typography} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import faker from "@faker-js/faker";

import MyCard from "../common/MyCard";
import TestSteps from "./TestSteps";
import Question from "./Question";
import Actions from "./Actions";
import Stopwatch from "./Stopwatch";

const TestPassing = ({testType}) => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const getSolution = () => ({
            key: faker.datatype.uuid(),
            text: faker.lorem.words(4),
        });

        const getQuestion = () => ({
            id: faker.datatype.uuid(),
            text: faker.lorem.words(30),
            solutions: faker.helpers.uniqueArray(getSolution, 4),
            type: faker.lorem.words(4),
        });

        setQuestions(faker.helpers.uniqueArray(getQuestion, 10));
    }, []);

    const carousel = useRef();
    const [init, setInit] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div>
            <div style={{textAlign: "end"}}>
                <TestSteps currentQuestion={currentQuestion}/>
            </div>
            <MyCard height={400}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Space style={{margin: "10px 0"}}>
                        <QuestionCircleOutlined/>
                        <Typography>
                            Test type
                        </Typography>
                    </Space>
                    <Stopwatch/>
                </div>
                <Carousel
                    ref={carousel}
                    onInit={() => setInit(true)}
                    dots={false}
                    touchMove={false}
                    beforeChange={(current, next) => setCurrentQuestion(next)}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {questions.map(q => <div key={q.id}>
                        <Question question={q}/>
                    </div>)}
                </Carousel>
                {init && <div style={{textAlign: "end", margin: "10px 0"}}>
                    <Actions
                        currentQuestion={currentQuestion}
                        solutionsCount={10}
                        next={carousel.current?.next}
                        prev={carousel.current?.prev}
                    />
                </div>}
            </MyCard>
        </div>
    );
};

export default TestPassing;