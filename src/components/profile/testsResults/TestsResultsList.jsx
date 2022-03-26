import React from 'react';
import {Collapse} from "antd";

import TestResultItem from "./TestResultItem";

const TestsResultsList = () => {
    const tests = [
        {
            timestamp: new Date(),
            type: "Type",
            questions: [
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: true},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: false},
                {text: "wclk qkwc wcn lkqmcl;qsc ;lamsc qwlkcm lqkwc ", isSuccess: false},
            ],
        },
    ];

    return (
        <div>
            <Collapse>
                {tests.map(t => <TestResultItem key={t.timestamp} result={t}/>)}
            </Collapse>
        </div>
    );
};

export default TestsResultsList;