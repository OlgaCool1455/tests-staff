import React, {useContext} from 'react';
import {Form} from "antd";
import {signInWithEmailAndPassword} from "firebase/auth";

import {auth} from "../../firebaseApi";
import {UserContext} from "../../App";
import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";
import {setLocalStorageAuthParams} from "./utils";

const SignIn = () => {
    const {setUser} = useContext(UserContext);

    const onLogin = async (data) => {
        const user = await signInWithEmailAndPassword(auth, data.email, data.password);
        console.log(user);
        setUser(user);
        setLocalStorageAuthParams(data.email, data.password);
    }

    const onLoginFailed = () => {
        console.log('login failed')
    }

    return (
        <Form onFinish={onLogin} onFinishFailed={onLoginFailed}>
            <FormInput
                rules={[
                    { required: true, message: "please input your password" },
                    { type: 'email', message: "the input is not valid e-mail" },
                ]}
                name={'email'}
                placeholder={"email"}
            />
            <FormInput
                rules={[
                    { required: true, message: "please input your password" },
                    { type: "string", min: 6, message: "min length 6"},
                ]}
                name={'password'}
                placeholder={"password"}
                password
            />
            <MyButton submit textAlign={"center"}>
                Sign In
            </MyButton>
        </Form>
    );
};

export default SignIn;