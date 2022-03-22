import React from 'react';
import {Typography} from "antd";
import {UserOutlined, ExperimentOutlined, ExportOutlined} from "@ant-design/icons";
import {signOut} from "firebase/auth";

import {auth} from "../../firebaseApi";
import MyCard from "../common/MyCard";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 60,
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <MyCard height={85}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <Typography.Title style={{marginBottom: 0}} level={3}>
                        TSs
                    </Typography.Title>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NavbarLink Icon={ExperimentOutlined} to={"/"}/>
                        <NavbarLink Icon={UserOutlined} to={"/profile"}/>
                        <NavbarLink Icon={ExportOutlined} onClick={() => signOut(auth)}/>
                    </div>
                </div>
            </MyCard>
        </div>
    );
};

export default Navbar;