import React, {useContext} from 'react';
import {Form, message} from "antd";

import {signUp} from "../../firebase/auth";
import {UserContext} from "../../App";
import {emailRules, passwordRules} from "./utils";
import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";

const SignUp = () => {
    const {setUser} = useContext(UserContext);

    const onRegister = async (data) => {
        const user = await signUp(data.email, data.username, data.password);

        if (user) {
            setUser(user);
        } else {
            message.error("sign up failed");
        }
    }

    const onRegisterFailed = () => {
        console.log("failed");
    }

    return (
        <Form onFinish={onRegister} onFinishFailed={onRegisterFailed}>
            <FormInput
                rules={emailRules}
                name={'email'}
                placeholder={"email"}
            />
            <FormInput
                rules={[{required: true, text: "this field is required"}]}
                name={'username'}
                placeholder={"username"}
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