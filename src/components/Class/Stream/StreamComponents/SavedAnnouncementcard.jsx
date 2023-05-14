import React from "react";
import { createStyles, Button, Flex, Accordion } from "@mantine/core";
import { BiComment } from 'react-icons/bi';
import { RiDeleteBinFill } from 'react-icons/ri';

const useStyles = createStyles((theme) => ({
    saved_announcement: {
        borderRadius: "0.3rem",
        '&:hover': {
            backgroundColor: "#DFFFD8"
        }
    },
    accordion_section1: {
        width: "10%",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
    },
    accordion_section2: {
        width: "40%",

        alignItems: "center",
        cursor: "pointer",
    },
    accordion_section3: {
        width: "40%",
        cursor: "pointer",
        alignItems: "center",
        color: "gray",
    },
    accordion_section4: {
        width: "10%",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
    },
    accordion_delete_button: {
        cursor: "pointer",
        backgroundColor: "#C7E9B0",
        '&:hover': { backgroundColor: "#DFFFD8" }
    }
}));

const SavedAnnouncementcard = () => {
    const { classes, theme } = useStyles();
    return <>
        <Accordion.Panel >
            <Flex className={classes.saved_announcement}>
                <Flex className={classes.accordion_section1}><BiComment size={"1.3rem"}></BiComment></Flex>
                <Flex className={classes.accordion_section2}>Assignment 1</Flex>
                <Flex className={classes.accordion_section3}>Tomorrow 08:30</Flex>
                <Flex className={classes.accordion_section4}> <Button className={classes.accordion_delete_button} ><RiDeleteBinFill size={"1.3rem"} color="green"></RiDeleteBinFill></Button></Flex>
            </Flex>

        </Accordion.Panel>
    </>
}
export default SavedAnnouncementcard;