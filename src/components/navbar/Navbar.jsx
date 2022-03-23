import React, {useContext} from 'react';
import {message, Typography} from "antd";
import {UserOutlined, ExperimentOutlined, ExportOutlined} from "@ant-design/icons";

import {signOut} from "../../firebaseApi";
import {UserContext} from "../../App";
import MyCard from "../common/MyCard";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
    const {setUser} = useContext(UserContext);
    const onSignOut = async () => {
        const success = await signOut();

        if (success) {
            setUser(null);
        } else  {
            message.error("sign out failed");
        }
    }

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
                        <NavbarLink Icon={ExportOutlined} onClick={onSignOut}/>
                    </div>
                </div>
            </MyCard>
        </div>
    );
};

export default Navbar;