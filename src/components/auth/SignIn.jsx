import React, {useContext} from 'react';
import {Form, message} from "antd";

import {signIn} from "../../firebase/auth";
import {UserContext} from "../../App";
import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";

const SignIn = () => {
    const {setUser} = useContext(UserContext);

    const onLogin = async (data) => {
        const user = await signIn(data.email, data.password);

        if (user) {
            setUser(user);
        } else {
            message.error("sign in failed");
        }
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