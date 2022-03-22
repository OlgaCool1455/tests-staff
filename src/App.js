import React, {useEffect, useState} from "react";
import 'antd/dist/antd.css';
import {NavLink, BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

import './App.css';
import {BACKGROUND_COLOR} from "./styleConsts";
import TestsStaff from "./pages/TestsStaff";
import Auth from "./pages/Auth";
import Navbar from "./components/navbar/Navbar";

export const UserContext = React.createContext(null);

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(null);
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={user}>
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
                    <Navbar />
                    <Routes>
                        <Route exact path={'/'} element={<TestsStaff />}/>
                        <Route path={'auth'} element={<Auth />}/>
                    </Routes>
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
