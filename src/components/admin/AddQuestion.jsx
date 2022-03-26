import React, {useContext} from 'react';
import {Form, Radio, Space} from "antd";

import {TestTypesContext} from "../../App";
import {addQuestion} from "../../firebase/questions";
import FormSelect from "../common/FormSelect";
import FormInput from "../common/FormInput";
import MyButton from "../common/MyButton";
import RadioSolutionItem from "./RadioSolutionItem";

const AddQuestion = () => {
    const {testTypes} = useContext(TestTypesContext);
    const options = testTypes ? testTypes.map(t => ({value: t.id, label: t.text})) : [];

    return (
        <>
            <Form onFinish={addQuestion} initialValues={{}}>
                <Space direction={"vertical"} style={{width: "100%"}}>
                    <FormSelect
                        name={"type"}
                        placeholder={"select the type of test"}
                        options={options}
                        rules={[{required: true, message: "please, select the type of test"}]}
                    />
                    <FormInput
                        name={"question"}
                        placeholder={"please, enter text of question"}
                        rules={[
                            {required: true, message: "please, enter your password"},
                            {type: "string", min: 64, message: "min length 64"},
                        ]}
                    />

                    <Form.Item name={"correctSolution"} rules={[{required: true, message: "please, select solution"}]}>
                        <Radio.Group>
                            <Form.List initialValue={["", ""]} name={"solutions"}>
                                {((fields, {add, remove}) => (
                                    <>
                                        <div
                                            style={{
                                                maxHeight: 200,
                                                width: "100%",
                                                overflowY: "auto",
                                                marginBottom: 5
                                            }}
                                        >
                                            {fields.map(field => <RadioSolutionItem key={field.name} field={field} remove={remove}/>)}
                                        </div>
                                        <MyButton type={"default"} onClick={add}>
                                            add solution
                                        </MyButton>
                                    </>
                                ))}
                            </Form.List>
                        </Radio.Group>
                    </Form.Item>
                    <MyButton textAlign={"end"} submit>
                        create question
                    </MyButton>
                </Space>
            </Form>
        </>
    );
};

export default AddQuestion;