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

    const getRole = (class_) => {
        if (class_.classTeachers.map((teacher) => teacher.teacherId).includes(user._id)) {
            return 'teacher';
        }

        if (class_.classStudents.map((student) => student.studentId).includes(user._id)) {
            return 'student';
        }
    }

    // classes.classesAsTeacher && classes.classesAsTeacher.filter((class_) => {
    //     // console.log(class_, 'classId 2');
    //     return class_.isArchived === false;
    // }).sort((a, b) => {
    //     return new Date(b.date) - new Date(a.date);
    // }).map((class_) => {
    //     console.log(class_, 'classId 3');
    // });





    return (
        <>
            <Flex wrap={'wrap'}>
                {classes &&
                    classes.classesAsTeacher.filter((class_) => {
                        return class_.isArchived === false
                    }).sort((a, b) => {
                        return new Date(b.date) - new Date(a.date);
                    }).map((class_) => {
                        return (
                            <Class
                                key={class_._id}
                                classInfo={class_.classId}
                                user={user}
                                role={getRole(class_.classId)}
                            />
                        )
                    })
                }
                {classes &&
                    classes.classesAsStudent.filter((class_) => {
                        return class_.isArchived === false;
                    }).sort((a, b) => {
                        return new Date(b.date) - new Date(a.date);
                    }).map((class_) => {
                        return (
                            <Class
                                key={class_._id}
                                classInfo={class_.classId}
                                user={user}
                                role={getRole(class_.classId)}
                            />
                        )
                    }
                    )
                }
            </Flex>
        </>

    )
}
export default ClassroomDashboard;