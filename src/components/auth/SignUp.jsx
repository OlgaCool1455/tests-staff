import React, {useContext} from 'react';
import {Form} from "antd";
import {createUserWithEmailAndPassword} from "firebase/auth";

import {emailRules, passwordRules, setLocalStorageAuthParams} from "./utils";
import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";
import {auth} from "../../firebaseApi";
import {UserContext} from "../../App";

const SignUp = () => {
    const {setUser} = useContext(UserContext);

    const onRegister = async (data) => {
        const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
        setUser(user);
        setLocalStorageAuthParams(data.email, data.password);
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