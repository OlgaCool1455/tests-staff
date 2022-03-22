import React from 'react';
import {Button} from "antd";

import {BORDER_RADIUS, SUCCESS_COLOR} from "../../styleConsts";

const MyButton = ({children, type = "primary", icon, loading, textAlign, onClick, submit, ...props}) => {
    return (
        <div
            style={{
                width: "100%",
                textAlign: textAlign,
            }}
        >
            <Button
                onClick={onClick}
                size={"large"}
                type={type}
                icon={icon}
                loading={loading}
                style={{
                    borderRadius: BORDER_RADIUS,
                    border: type === "success" && "none",
                    outline: type === "success" && "none",
                    color: type === "success" && "#fff",
                    opacity: type === "success" && props.disabled && 0.7,
                    backgroundColor: type === "success" && SUCCESS_COLOR,
                }}
                htmlType={submit && "submit"}
                {...props}
            >
                {children}
            </Button>
        </div>
    );
};

export default MyButton;