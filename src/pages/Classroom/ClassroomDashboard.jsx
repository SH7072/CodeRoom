import React from 'react';
import { Flex } from '@mantine/core';
import Class from '../../components/Class/Class';

const ClassroomDashboard = ({ user }) => {

    console.log(user, 'user');
    return (
        <>
            <Flex wrap={'wrap'}>
                <Class />
                <Class />
                <Class />
                <Class />
            </Flex>

        </>

    )
}
export default ClassroomDashboard;