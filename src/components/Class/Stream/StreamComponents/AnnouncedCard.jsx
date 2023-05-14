import React from "react";
import { createStyles, Button, Flex, Avatar, TextInput, Menu } from "@mantine/core";
import { BsThreeDotsVertical, BsPeopleFill } from 'react-icons/bs';
import { TbArrowBigRight } from 'react-icons/tb';
import ClassComment from "./ClassComment";


const useStyles = createStyles((theme) => ({
    announced_card_container: {
        marginTop: "1rem",
        backgroundColor: "white",

        width: '100%',
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        borderRadius: "8px",
        border: "0px solid gray",

        alignItems: "center",
        flexDirection: "column",
    },
    announced_section_1: {
        width: '100%',
        marginTop: "1rem",
    },
    profile_picture: {
        width: "7%",
        justifyContent: "center",
        alignItems: "center",
        height: "3rem",
    },
    profile_Description: {
        width: "88%",

        height: "3rem",
        flexDirection: "column",
        justifyContent: "center",
    },
    three_dot_icon: {
        justifyContent: "center",
        alignItems: "center",
    },
    announced_section_2: {
        width: "94%",
        padding: "2%",
        paddingLeft: "3%",
        paddingRight: "3%",
    },
    announced_section_3: {

        padding: "2%",
        width: "96%",
        borderTop: "1px solid #B2B2B2",


    },
    announced_section_4: {
        padding: "2%",
        width: "96%",
        borderTop: "1px solid #B2B2B2",
    },
    no_of_comments: {
        width: "98%",
        height: "2rem",
        // border: "1px solid black",
        alignItems: "center",
        paddingLeft: "2%"
    },
    writeComment_div1: {
        width: "8%",
        alignItems: "center",
        justifyContent: "center",

    },
    writeComment_div2: {
        width: "85%",

        alignItems: "center",
    },
    writeComment_div3: {
        width: "7%",

        alignItems: "center",
        justifyContent: "center",

    },


}))
const AnnouncedCard = () => {

    const { classes, theme } = useStyles();

    return <>
        <Flex className={classes.announced_card_container}>
            <Flex className={classes.announced_section_1}>
                <Flex className={classes.profile_picture}><Avatar size={"3rem"}></Avatar></Flex>
                <Flex className={classes.profile_Description}>
                    <h4 style={{ margin: "0px", padding: "0px", color: "#434242", fontFamily: "sans-serif" }}>Shobhit Gupta</h4>
                    <h5 style={{ margin: "0px", padding: "0px", color: "gray" }}>05:50</h5>
                </Flex>
                <Flex className={classes.three_dot_icon}>
                    <Menu position="right" offset={6} withArrow>
                        <Menu.Target>
                            <Button radius={"50%"} style={{ backgroundColor: "white" }}> <BsThreeDotsVertical color={"black"} size={"1rem"}></BsThreeDotsVertical></Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item disabled>Move to top</Menu.Item>
                            <Menu.Item>Edit</Menu.Item>
                            <Menu.Item>Delete</Menu.Item>
                            <Menu.Item>Copy Link</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Flex>
            <div className={classes.announced_section_2}><h5 style={{ margin: "0px", color: "black", fontFamily: "sans-serif", fontWeight: "lighter", fontSize: "0.9rem" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5></div>
            <div className={classes.announced_section_3}>
                <Flex className={classes.no_of_comments}><BsPeopleFill size={"1.5rem"} color="gray" ></BsPeopleFill>
                    <h5 style={{ margin: "0rem", marginLeft: "0.7rem", color: "gray", fontFamily: "revert", fontWeight: "bolder", fontSize: "0.8rem" }}>2 class comments</h5>
                </Flex>
                <ClassComment></ClassComment>
                <ClassComment></ClassComment>
            </div>
            <Flex className={classes.announced_section_4}>
                <Flex className={classes.writeComment_div1}><Avatar size={"3rem"}></Avatar></Flex>
                <Flex className={classes.writeComment_div2}> <TextInput placeholder="Add Class Comment.." radius="5rem" style={{ width: "100%", }}></TextInput> </Flex>
                <Flex className={classes.writeComment_div3}><TbArrowBigRight size={"2rem"} color="gray"></TbArrowBigRight></Flex>

            </Flex>

        </Flex >

    </>
}

export default AnnouncedCard;