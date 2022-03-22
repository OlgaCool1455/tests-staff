import React from "react";
import 'antd/dist/antd.css';

import './App.css';
import Auth from "./pages/Auth";
import {BACKGROUND_COLOR} from "./styleConsts";
import TestsStaff from "./components/testsStaff/testPassing/TestsStaff";

const App = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: BACKGROUND_COLOR,
            }}
        >
            {/*<Auth />*/}
            <TestsStaff />
        </div>
    );
}

export default App;
