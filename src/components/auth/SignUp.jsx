import React from 'react';
import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";
import {Form} from "antd";
import {emailRules, passwordRules} from "./utils";

const SignUp = () => {
    const onFinish = (data) => {
        console.log(data);
    }

    return (
        <Form onFinish={onFinish}>
            <FormInput
                rules={emailRules}
                name={'email'}
                placeholder={"email"}
            />
            <FormInput
                rules={passwordRules}
                name={'password'}
                placeholder={"password"}
                password
            />
            <FormInput
                dependencies={['password']}
                rules={[
                    { required: true, message: "please confirm your password" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('the two passwords that you entered do not match'));
                        },
                    }),
                ]}
                name={'confirm'}
                placeholder={"confirm password"}
                password
            />
            <MyButton submit textAlign={"center"}>
                Sign Up
            </MyButton>
        </Form>
    );
};

export default SignUp;