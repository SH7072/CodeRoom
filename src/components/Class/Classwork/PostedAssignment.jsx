import React from "react";
import { createStyles, Button, Flex, Menu } from "@mantine/core";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Accordion, ScrollArea } from '@mantine/core';
import PostedAssignmentAccordItem from "./PostedAssAccordItem";

const useStyles = createStyles((theme) => ({
    Posted_main_container: {
        // border: "1px solid black",
        flexDirection: "column",
        width: "60%",
        margin: "10vh auto",
    },

}));

const PostedAssignment = () => {
    const { classes, theme } = useStyles();
    return <>
        <Flex className={classes.Posted_main_container}>
            <Accordion defaultValue="Assignment" variant="separated" radius={'xs'} chevron={false}

            >

                <PostedAssignmentAccordItem></PostedAssignmentAccordItem>
                <PostedAssignmentAccordItem></PostedAssignmentAccordItem>
                <PostedAssignmentAccordItem></PostedAssignmentAccordItem>



            </Accordion>
        </Flex >
    </>
}
export default PostedAssignment;