import React, { useState } from 'react';
import { Flex } from '@mantine/core';
import Class from '../../components/Class/Class';
import { DateInput, DatePickerInput } from '@mantine/dates';

const ClassroomDashboard = ({ user }) => {

    console.log(user, 'user');
    const [value, setValue] = useState(null);
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