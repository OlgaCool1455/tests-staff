import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router';

import {UserContext} from "../App";
import TestPassing from "../components/testsPassing/TestPassing";
import TestTypesList from "../components/testTypes/TestTypesList";

const TestsStaff = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('auth');
            return null;
        }
    }, [user]);

    return (
        <div>
            <TestTypesList />
        </div>
    );
};

export default TestsStaff;