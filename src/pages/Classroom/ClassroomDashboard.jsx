import React, { useEffect, useState } from 'react';
import { Flex } from '@mantine/core';
import Class from '../../components/Class/Class';
import { DateInput, DatePickerInput } from '@mantine/dates';
import { useSelector } from 'react-redux';


const ClassroomDashboard = () => {


    const { user } = useSelector(state => state.user);
    console.log(user, 'user');

    const classes = [];
    {
        user && user.classesAsStudent.map((class_) => {
            classes.push(class_);
        });
    }
    {
        user && user.classesAsTeacher.map((class_) => {
            classes.push(class_);
        });
    }

    // console.log(classes, 'classes');

    return (
        <>
            <Flex wrap={'wrap'}>
                {user &&
                    (
                        classes.map((class_, index) => {
                            return (<Class classInfo={class_} key={index} />);
                        })
                    )
                }


            </Flex>

        </>

    )
}
export default ClassroomDashboard;