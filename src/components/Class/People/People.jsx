
import { createStyles, Button, Flex, Menu, Table } from "@mantine/core";

import React, { useEffect } from "react";

import { useState } from "react";

import { BsThreeDotsVertical, BsLink, BsPersonPlus, BsPersonCircle } from 'react-icons/bs';

import { loadClass } from "../../../redux/actions/class";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
    main_container: {
        backgroundColor: 'white',
        padding: '2rem',
        width: '56%',
        marginLeft: "22%",
        marginRight: "22%",

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
    // const rows = elements.map((element) => (
    //     <tr key={element.people}>
    //         <td>{element.avatar}</td>
    //         <td>{element.name}</td>
    //         <td>{element.icon}</td>
    //     </tr>
    // ));
    return (
        <div className={classes.main_container}>

            <div className="teachers">
                <Table  horizontalSpacing={"xl"} 
                // highlightOnHover
                >
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
                        <tr key="ad">
                            <td>
                                <Flex direction={"row"}>
                                    <Flex className={classes.container1}>

                                        <BsPersonCircle />

                                        Shubham Chandwani
                                    </Flex>
                                    <Flex className={classes.container2}>

                                        <Button radius={"50%"} style={{ backgroundColor: "white" }}>
                                            <BsThreeDotsVertical color={"black"} />
                                        </Button>
                                    </Flex>
                                </Flex>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="teachers">Students
            </div>
        </div >
    )
}

export default People