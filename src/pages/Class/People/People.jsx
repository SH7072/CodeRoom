
import { createStyles, Button, Flex, Menu, Table } from "@mantine/core";

import React, { useEffect } from "react";

import { useState } from "react";

import { BsThreeDotsVertical, BsLink, BsPersonPlus, BsPersonCircle } from 'react-icons/bs';

import { loadClass } from "../../../redux/actions/class";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPeople } from "../../../redux/actions/people";

const useStyles = createStyles((theme) => ({
    main_container: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        backgroundColor: 'white',
        width: '65vw',
        margin: "0 auto",
        padding: '2rem 1rem 1rem 1rem',
    },
    container1: {
        backgroundColor: "white",
        width: "80%",
        marginRight: "1rem",
        margin: "1rem",
        marginLeft: "0rem"
    },
    container2: {
        backgroundColor: "white",
        width: "20%",
        margin: "1rem",
        marginRight: "0rem"
    },
}));

const People = () => {
    const { classes, theme } = useStyles();
    const { elements, setElements } = useState([]);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPeople(params.id));
    }, [params.id]);

    const loading = useSelector((state) => { return state.people.loading });
    const teacherList = useSelector((state) => { return state.people.teacherList });
    const studentList = useSelector((state) => { return state.people.studentList });


    return (
        <>
            {
                !loading && (
                    <div className={classes.main_container}>

                        <div className="teachers">
                            <Table horizontalSpacing={"xl"}>
                                <thead>
                                    <tr>
                                        <th >
                                            <Flex style={{ flexDirection: "row" }}>
                                                <Flex className={classes.container1}>
                                                    Teachers
                                                </Flex>
                                                <Flex className={classes.container2}>
                                                    <Button radius={"50%"} style={{ backgroundColor: "white" }}>
                                                        <BsPersonPlus color={"Green"} />
                                                    </Button>
                                                </Flex>
                                            </Flex>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        teacherList && teacherList.map((teacher, index) => {
                                            return (
                                                <tr key="ad">
                                                    <td>
                                                        <Flex direction={"row"}>
                                                            <Flex className={classes.container1}>

                                                                <BsPersonCircle />

                                                                {teacher.name}
                                                            </Flex>
                                                            <Flex className={classes.container2}>

                                                                <Button radius={"50%"} style={{ backgroundColor: "white" }}>
                                                                    <BsThreeDotsVertical color={"black"} />
                                                                </Button>
                                                            </Flex>
                                                        </Flex>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>


                        <div className="teachers">
                            <Table horizontalSpacing={"xl"}>
                                <thead>
                                    <tr>
                                        <th >
                                            <Flex style={{ flexDirection: "row" }}>
                                                <Flex className={classes.container1}>
                                                    Students
                                                </Flex>
                                                <Flex className={classes.container2}>
                                                    <Button radius={"50%"} style={{ backgroundColor: "white" }}>
                                                        <BsPersonPlus color={"Green"} />
                                                    </Button>
                                                </Flex>
                                            </Flex>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList && studentList.map((student, index) => {
                                            return (
                                                <tr key="ad">
                                                    <td>
                                                        <Flex direction={"row"}>
                                                            <Flex className={classes.container1}>

                                                                <BsPersonCircle />

                                                                {student.name}
                                                            </Flex>
                                                            <Flex className={classes.container2}>

                                                                <Button radius={"50%"} style={{ backgroundColor: "white" }}>
                                                                    <BsThreeDotsVertical color={"black"} />
                                                                </Button>
                                                            </Flex>
                                                        </Flex>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default People