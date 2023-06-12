import React from "react";
import { createStyles, Button, Flex, Avatar, Menu } from "@mantine/core";
import { BsThreeDotsVertical, } from 'react-icons/bs';
const useStyles = createStyles((theme) => ({
    comment_container: {

        marginTop: "0.5%",
        // paddingLeft: "2%",
    },
    comment_profile_picture: {
        width: "10%",
        // border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",

    },
    comment_content_container: {
        width: "80%",
        // border: "1px solid black",
        flexDirection: "column",
        justifyContent: "center",
        // justifyContent: "space-between",

    },
    trippledot: {
        // width: "5%",
        // border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",

    },
    commented_text: {

    },

}))
const ClassComment = () => {
    const { classes, theme } = useStyles();
    return <>
        <Flex className={classes.comment_container}>
            <Flex className={classes.comment_profile_picture}><Avatar size={"2.5rem"}></Avatar></Flex>
            <Flex className={classes.comment_content_container}>
                <Flex >
                    <h5 style={{ margin: "0px", padding: "0px", color: "#434242", fontFamily: "sans-serif", fontSize: "1rem", marginRight: "1rem" }}>Shobhit Gupta</h5>
                    <h6 style={{ margin: "0px", padding: "0px", color: "#434242", fontFamily: "sans-serif", fontSize: "0.8rem", fontWeight: "bold", color: "gray", display: "flex", alignItems: "center" }}>09:28</h6>
                </Flex>
                <div className={classes.commented_text}>hlw</div>
            </Flex>
            <Flex className={classes.trippledot}>
                <Menu position="right" offset={2} withArrow>
                    <Menu.Target>
                        <Button radius={"50%"} style={{ backgroundColor: "white" }}> <BsThreeDotsVertical color={"black"} size={"1rem"}></BsThreeDotsVertical></Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item>Edit</Menu.Item>
                        <Menu.Item>Delete</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Flex>
        </Flex>
    </>
};
export default ClassComment;