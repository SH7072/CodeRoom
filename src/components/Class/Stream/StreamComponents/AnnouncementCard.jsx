import { createStyles, Button, Flex, Avatar, Select, Tooltip, Menu } from "@mantine/core";

import React from "react";

import { useState } from "react";
import { BsArrowLeftRight, BsUpload, BsLink, BsCaretDownFill } from 'react-icons/bs';


const useStyles = createStyles((theme) => ({
    announcement_container: {
        backgroundColor: "white",
        width: '100%',
        height: "5rem",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "8px",
        border: "0px solid gray",
        // padding: "3px",
        alignItems: "center",

    },
    open_announcement_container: {
        backgroundColor: "white",
        width: '100%',
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "8px",
        border: "0px solid gray",
        // padding: "3px",
        flexDirection: "column"
    },
    select_button: {
        marginLeft: "1rem",
        width: "20%",
        marginBottom: "1rem",
        border: "1px solid gray",
        borderRadius: "5px",
    },
    announcement_text: {
        margin: "1rem",
        marginTop: "0rem",
        height: "7rem",
        '&:hover': {
            backgroundColor: "#EEEEEE",
        },
        padding: "1rem",
        fontFamily: "Arial",
        border: "0px",
        borderBottom: "1px solid gray",
        fontSize: "1rem",
    },
    announcement_buttons_container: {


        justifyContent: "space-between"
    },
    announcement_round_button: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        margin: "1rem",
        marginTop: "0rem",
        padding: "0px",
        border: "1px solid green",
        backgroundColor: "#DFFFD8",
        '&:hover': {
            backgroundColor: "#C7E9B0",
        }
    },
    submit_select_button: {
        width: "40%",
    },
}));
const AnnouncementCard = () => {

    const { classes, theme } = useStyles();
    const [showDiv1, setShowDiv1] = useState(true);
    const toggleDiv = () => {
        setShowDiv1(!showDiv1);
    };

    return <>
        <div >

            {showDiv1 ?
                <Flex className={classes.announcement_container} onClick={toggleDiv}>
                    <Avatar size={"lg"} radius={"xl"} style={{ marginLeft: "1rem", }}></Avatar>
                    <h5 style={{ color: "gray", fontFamily: "Arial" }}>Announce something to your class</h5>
                    <BsArrowLeftRight size="1.3rem" style={{ position: "relative", left: "52%", color: "gray", }}></BsArrowLeftRight>
                </Flex>
                :
                <Flex className={classes.open_announcement_container}>
                    <p style={{ marginLeft: "1rem", color: "black", marginBottom: "1rem" }}>For</p>
                    <Flex>
                        <Select disabled placeholder="Mathematics"
                            className={classes.select_button}
                            data={[
                                { value: 'class B', label: 'Class B' },
                                { value: 'class C', label: 'Class C' },
                                { value: 'class D', label: 'Class D' },
                                { value: 'class E', label: 'Class E' },
                            ]}>

                        </Select>
                        <Select placeholder="All Students"
                            className={classes.select_button}
                            data={[
                                { value: 'All Students', label: 'All Students' },

                            ]}>

                        </Select>
                    </Flex>
                    <textarea type="text" id="announcement_text" name="announcement_text" placeholder="Announce something to your class" className={classes.announcement_text}></textarea>
                    <Flex className={classes.announcement_buttons_container} padding="0px">
                        <div >
                            <Tooltip label="Upload Files" style={{ backgroundColor: "green", color: "#DFFFD8" }}>
                                <Button className={classes.announcement_round_button} ><BsUpload size={"1.2rem"} color="green"></BsUpload> </Button>
                            </Tooltip>
                            <Tooltip label="Add Link" style={{ backgroundColor: "green", color: "#DFFFD8" }}>
                                <Button className={classes.announcement_round_button} ><BsLink size={"1.2rem"} color="green"></BsLink> </Button>
                            </Tooltip>



                        </div>
                        <Flex style={{ justifyContent: "flex-end", marginRight: "1rem" }}>
                            <Button onClick={toggleDiv} style={{ marginRight: "1rem", backgroundColor: "#FAD4D4", color: "gray" }}>Cancel</Button>
                            <Button style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", marginRight: "3px", backgroundColor: "#D8D8D8", color: "gray" }}>Post</Button>
                            {/* <Select
                        rightSection={<IconChevronDown size="1rem" />}
                        rightSectionWidth={30}

                        styles={{ rightSection: { pointerEvents: 'none' } }}
                        className={classes.submit_select_button}
                        data={[
                            { value: 'class B', label: 'Class B' },
                            { value: 'class C', label: 'Class C' },
                            { value: 'class D', label: 'Class D' },
                            { value: 'class E', label: 'Class E' },
                        ]}>

                    </Select> */}

                            <Menu shadow="md" width={100} position="right-start" withArrow arrowPosition="center"  >
                                <Menu.Target>
                                    <Button style={{ backgroundColor: "#D8D8D8", color: "gray", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}> <BsCaretDownFill></BsCaretDownFill></Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item>Post</Menu.Item>
                                    <Menu.Item>Schedule</Menu.Item>
                                    <Menu.Item>Save Draft</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>

                        </Flex>

                    </Flex>
                </Flex>}
        </div>
    </>
}
export default AnnouncementCard;