import React, {useState} from "react";
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import useAsyncEffect from "use-async-effect";

import './App.css';
import {signIn} from "./firebase/auth";
import {BACKGROUND_COLOR} from "./styleConsts";
import TestsStaff from "./pages/TestsStaff";
import Auth from "./pages/Auth";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/common/Loader";
import Profile from "./pages/Profile";
import {getAllTestTypes} from "./firebase/types";
import TestPassing from "./pages/TestPassing";
import Admin from "./pages/Admin";

export const UserContext = React.createContext(null);
export const LoaderContext = React.createContext(null);
export const TestTypesContext = React.createContext(null);

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [testTypes, setTestTypes] = useState(null);

    // init auth
    useAsyncEffect(async () => {
        const email = window.localStorage.getItem("email");
        const password = window.localStorage.getItem("password");

        if (email && password) {
            setIsLoading(true);
            const user = await signIn(email, password);
            setUser(user);
            setIsLoading(false);
        }
    }, []);

    useAsyncEffect(async () => {
        const types = await getAllTestTypes();
        setTestTypes(types);
    }, []);

    return (
        <BrowserRouter>
            <LoaderContext.Provider value={{isLoading, setIsLoading}}>
                <UserContext.Provider value={{user, setUser}}>
                    <TestTypesContext.Provider value={{testTypes, setTestTypes}}>
                        {isLoading && <Loader/>}
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
                            {user && <Navbar/>}
                            <Routes>
                                <Route exact path={'/'} element={<TestsStaff/>}/>
                                <Route exact path={'/test/:testTypeId'} element={<TestPassing/>}/>
                                <Route path={'auth'} element={<Auth/>}/>
                                <Route path={'profile'} element={<Profile/>}/>
                                {user?.isAdmin && <Route path={'admin'} element={<Admin/>}/>}
                            </Routes>
                        </div>
                    </TestTypesContext.Provider>
                </UserContext.Provider>
            </LoaderContext.Provider>
        </BrowserRouter>
    );
}

export default App;
