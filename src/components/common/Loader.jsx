import React from 'react';
import {LoadingOutlined} from "@ant-design/icons";

const Loader = () => {
    return (
        <div
            style={{
                zIndex: 7,
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(255, 255, 255, .5)",
                // opacity: 0.1,
            }}
        >
            <LoadingOutlined style={{fontSize: 50, fontWeight: 700}}/>
        </div>
    );
};

export default Loader;