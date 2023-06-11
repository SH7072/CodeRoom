import React, { useEffect, useState } from 'react';
import { Flex } from '@mantine/core';
import Class from '../../components/Class/Class';
import { DateInput, DatePickerInput } from '@mantine/dates';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClassRooms } from '../../redux/actions/class';
import store from '../../redux/store';


const ClassroomDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllClassRooms());
    }, [dispatch]);

    const { user } = useSelector(state => state.user);
    const { classes } = useSelector(state => state.classes);
    // console.log(user, 'user');

    // console.log(classes, 'classes');
    // console.log(classes.classesAsTeacher, 'classesAsTeacher');

    // const classes = [];
    // {
    //     user.classesAsStudent.map((class_) => {
    //         classes.push(class_);
    //     });
    // }
    // {
    //     user.classesAsTeacher.map((class_) => {
    //         classes.push(class_);
    //     });
    // }

    // console.log(classes, 'classes');

    return (
        <>
            <Flex wrap={'wrap'}>
                {classes &&
                    classes.classesAsTeacher.map((class_) => {
                        return (
                            <Class
                                key={class_._id}
                                classInfo={class_.classId}
                                user={user}
                            />
                        )
                    }
                    ).sort((a, b) => {
                        return new Date(b.date) - new Date(a.date);
                    }
                    )
                }
                {classes &&
                    classes.classesAsStudent.map((class_) => {
                        return (
                            <Class
                                key={class_._id}
                                classInfo={class_.classId}
                                user={user}
                            />
                        )
                    }
                    ).sort((a, b) => {
                        return new Date(b.date) - new Date(a.date);
                    }
                    )
                }
            </Flex>
        </>

    )
}
export default ClassroomDashboard;