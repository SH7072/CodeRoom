import React from 'react';
import { Button, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import Class from './Class/Class';

const ClassroomDashboard = () => {
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