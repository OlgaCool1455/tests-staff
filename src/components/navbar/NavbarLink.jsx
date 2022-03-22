import React from 'react';
import {useNavigate} from "react-router";

import MyButton from "../common/MyButton";

const NavbarLink = ({to, onClick, Icon}) => {
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(to);
    }

    return (
        <MyButton type={"text"} onClick={onClick || onNavigate}>
            <Icon style={{fontSize: 24}}/>
        </MyButton>
    );
};

export default NavbarLink;