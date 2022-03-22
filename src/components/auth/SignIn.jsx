import React from 'react';
import {Form} from "antd";

import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";

const SignIn = () => {
    const onFinish = (data) => {
        console.log(data);
    }

    return (
        <Form onFinish={onFinish}>
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