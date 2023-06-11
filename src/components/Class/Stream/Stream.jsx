import { createStyles, Button, Flex, Menu } from "@mantine/core";

import React, { useEffect } from "react";

import { useState } from "react";



import { BsThreeDotsVertical, BsLink } from 'react-icons/bs';

import AnnouncementCard from "./StreamComponents/AnnouncementCard";

import DescrioptionCard from "./StreamComponents/DescriptionCard";

import AnnouncedCard from "./StreamComponents/AnnouncedCard";

import ScheduleAnnouncement from "./StreamComponents/ScheduledAnnouncement";
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
        width: "20%",
        marginRight: "1rem",
        margin: "1rem",
        marginLeft: "0rem"
    },
    container2: {
        backgroundColor: "white",
        width: "75%",
        margin: "1rem",
        marginRight: "0rem"
    },
    classCode: {

        border: "1px solid gray",
        borderRadius: "8px",
        padding: "0.5rem",
        marginBottom: "1rem",
    },
    upcoming: {

        border: "1px solid gray",
        borderRadius: "8px",
        padding: "0.5rem",
        marginBottom: "1rem",
    },
    verticalDots: {
        position: "relative",
        left: "90%",
        top: "-16%"
    },
    viewAll_button: {

        backgroundColor: "#DFFFD8",
        color: "green",
        '&:hover': {
            backgroundColor: "#C7E9B0",
            opacity: "0.8",
        }
    },

    classcode_icon: {

        width: "2rem",

        alignItems: "center",
        justifyContent: "center",

    },
    classcode_itemtext: {

        alignItems: "center",
        justifyContent: "center",
        color: "black",

        '&:hover': {
            backgroundColor: "#EEEEEE",
        }
    },





}));
const Stream = () => {

    const { classes, theme } = useStyles();
    const params = useParams();
    const dispatch = useDispatch();

    console.log(params.id);

    useEffect(() => {
        // console.log("Stream");
        dispatch(loadClass(params.id));
    }, [dispatch, params.id]);

    const loading = useSelector((state) => { return state.classes.loading });

    const classInfo = useSelector((state) => { return state.classes.classInfo });
    console.log(classInfo, "classInfo");


    return <>
        {
            !loading && classInfo &&

            <div className={classes.main_container}>
                <DescrioptionCard></DescrioptionCard>

                <Flex>
                    <Flex style={{ flexDirection: "column" }} className={classes.container1}>
                        <div className={classes.classCode}>
                            <Flex style={{ justifyContent: "space-between" }}>
                                <Flex style={{ alignItems: "center", justifyContent: "center" }}>
                                    <p style={{ margin: '0px' }}>Class Code</p>
                                </Flex>

                                <Menu position="right" offset={2} withArrow>
                                    <Menu.Target>
                                        <Button radius={"50%"} style={{ backgroundColor: "white", padding: "0px" }}> <BsThreeDotsVertical color={"black"} size={"1rem"} ></BsThreeDotsVertical></Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>
                                            <Flex>
                                                <Flex className={classes.classcode_icon}><BsLink size={"1.2rem"}></BsLink></Flex>
                                                <Flex className={classes.classcode_itemtext}>Copy class invite link</Flex>
                                            </Flex>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Flex>
                                                <Flex className={classes.classcode_icon}><BsLink size={"1.2rem"}></BsLink></Flex>
                                                <Flex className={classes.classcode_itemtext}>Copy class invite link</Flex>
                                            </Flex>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Flex>
                                                <Flex className={classes.classcode_icon}><BsLink size={"1.2rem"}></BsLink></Flex>
                                                <Flex className={classes.classcode_itemtext}>Copy class invite link</Flex>
                                            </Flex>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Flex>
                                                <Flex className={classes.classcode_icon}><BsLink size={"1.2rem"}></BsLink></Flex>
                                                <Flex className={classes.classcode_itemtext}>Copy class invite link</Flex>
                                            </Flex>
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Flex>

                            {/* <BsThreeDotsVertical className={classes.verticalDots} /> */}
                            <h3 style={{ margin: "0px", marginTop: "1rem", color: "green", fontSize: "20px" }}>2pEjuKl</h3>
                        </div>
                        <div className={classes.upcoming}>
                            <p style={{ margin: '0px', marginBottom: '1rem' }}>Upcoming</p>

                            <h5 style={{ margin: '0px', color: 'gray', marginBottom: "1rem" }}>No work due in soon</h5>
                            <Flex style={{ flexDirection: "column", alignItems: "flex-end" }}>
                                <Button className={classes.viewAll_button}>View All</Button>
                            </Flex>

                        </div>
                    </Flex>


                    <Flex style={{ flexDirection: "column" }} className={classes.container2}>

                        <AnnouncementCard></AnnouncementCard>
                        <ScheduleAnnouncement></ScheduleAnnouncement>
                        <AnnouncedCard></AnnouncedCard>
                        <AnnouncedCard></AnnouncedCard>
                        <AnnouncedCard></AnnouncedCard>

                    </Flex>
                </Flex >

            </div >
        }
    </>
}

export default Stream;