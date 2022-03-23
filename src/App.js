import React, {useState} from "react";
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {signInWithEmailAndPassword} from "firebase/auth";
import useAsyncEffect from "use-async-effect";

import './App.css';
import {auth} from "./firebaseApi";
import {BACKGROUND_COLOR} from "./styleConsts";
import TestsStaff from "./pages/TestsStaff";
import Auth from "./pages/Auth";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/common/Loader";
import Profile from "./pages/Profile";

export const UserContext = React.createContext(null);
export const LoaderContext = React.createContext(null);

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    useAsyncEffect(async () => {
        const email = window.localStorage.getItem("email");
        const password = window.localStorage.getItem("password");

        if (email && password) {
            setIsLoading(true);
            const user = await signInWithEmailAndPassword(auth, email, password);
            setUser(user);
            setIsLoading(false);
        }
    }, []);

    return (
        <BrowserRouter>
            <LoaderContext.Provider value={{isLoading, setIsLoading}}>
                <UserContext.Provider value={{user, setUser}}>
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
                            <Route path={'auth'} element={<Auth/>}/>
                            <Route path={'profile'} element={<Profile/>}/>
                        </Routes>
                    </div>
                </UserContext.Provider>
            </LoaderContext.Provider>
        </BrowserRouter>
    );
}

export default App;
