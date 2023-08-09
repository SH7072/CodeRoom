import React from "react";
import { createStyles, Button, Flex, Menu } from "@mantine/core";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Accordion, ScrollArea } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    Posted_main_container: {

        flexDirection: "column",
        width: "60%",
        margin: "10vh auto",
    },
    Assignment_title_box: {
        justifyContent: "space-between",
        alignItems: "center",
        height: "3rem",
    },

    view_instruction_box: {
        // height: "2rem",
        // padding: "1rem",
        // border: "1px solid black",
        marginTop: "11px",
        backgroundColor: "",
        // borderBottomLeftRadius: ".8rem",
        // borderBottomRightRadius: ".8rem",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #D1D1D1",
        padding: "2px",
        paddingTop: "16px",




    },
    review_work_button: {
        backgroundColor: "#3C4048",
        color: "white",
        '&:hover': {
            backgroundColor: "black",

        }
    },
    ViewInstruction_anchor: {
        color: "black",
        textDecoration: "none",
        fontFamily: "sans-serif",
        fontWeight: "bold",
    },

    acc_panel_box: {
        padding: "0px",
        border: "0px",
        borderRadius: "0px",
        backgroundColor: "",
        borderTop: "1px solid #D1D1D1",


    },
    content_container: {
        // border: "1px solid black"
    },
    text_content: {

        width: "60%",
        maxHeight: "40vh",
        // border: "1px solid black",
    },
    count_box: {
        width: "40%",
    },
    turnedin_box: {
        flexDirection: "column",
        width: "40%",
        borderLeft: "1px solid gray",
        height: "20vh",
        marginLeft: "10%",
        marginTop: "10%",
        marginBottom: "10%",
        alignItems: "center",
    },
    assigned_box: {
        flexDirection: "column",
        width: "40%",
        borderLeft: "1px solid gray",
        height: "20vh",
        marginRight: "10%",
        marginTop: "10%",
        marginBottom: "10%",
        alignItems: "center",
    },

}));


const PostedAssignmentAccordItem = () => {
    const { classes, theme } = useStyles();
    return <>
        <Accordion.Item value="a" style={{ padding: "0px", border: "0px", marginBottom: "2rem", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", }}

        >
            <Accordion.Control style={{ backgroundColor: "", borderRadius: "0px", }} >
                <Flex className={classes.Assignment_title_box}>
                    <Flex style={{ alignItems: "center" }}>
                        <HiOutlineDocumentText size={"2rem"}></HiOutlineDocumentText>
                        <p style={{ fontSize: "1.2rem", marginLeft: "1rem" }}>Assignment2</p>
                        <p style={{ marginLeft: "1rem" }}>[Graded]</p>
                    </Flex>

                    <div style={{ color: "gray" }}>Due Apr 6 , 11:59</div>
                </Flex>

            </Accordion.Control>
            <Accordion.Panel className={classes.acc_panel_box}>
                <Flex className={classes.content_container}>
                    <Flex className={classes.text_content}>
                        <ScrollArea w={"100%"} h={"100%"}>
                            The sun dipped below the horizon, casting a warm, golden glow across the tranquil meadow. Birds chirped their evening melodies as the first stars began to twinkle in the deepening sky. A gentle breeze rustled the leaves of nearby trees, creating a soothing symphony of nature's whispers. The air was filled with the scent of blooming flowers, a fragrant reminder of the beauty that surrounded everything.

                            In the distance, a small cottage stood, its windows illuminated by the soft, inviting light within. Inside, a family gathered around a crackling fireplace, sharing stories and laughter. The aroma of a hearty stew wafted from the kitchen, making everyone's mouths water in anticipation. It was moments like these that captured the essence of happiness, the simple joy of togetherness and the comfort of familiarity.

                            Meanwhile, on the other side of the world, a bustling city pulsed with life. Neon signs illuminated the streets, and the sound of car horns and chatter filled the air. Skyscrapers touched the clouds, their sleek surfaces reflecting the myriad of colors that surrounded them. People from all walks of life hurried along the sidewalks, each with their own destination and purpose, creating a tapestry of human existence.
                        </ScrollArea>
                    </Flex>
                    <Flex className={classes.count_box}>
                        <Flex className={classes.turnedin_box}>
                            <p style={{ margin: "0px", fontSize: "4rem" }}>20</p>
                            <p style={{ margin: "0px", }}>Turned in</p>
                        </Flex>
                        <Flex className={classes.assigned_box}>
                            <p style={{ margin: "0px", fontSize: "4rem" }}>99</p>
                            <p style={{ margin: "0px", }}>Assigned</p>
                        </Flex>


                    </Flex>
                </Flex>

                <Flex className={classes.view_instruction_box}>
                    <Flex><a href="" className={classes.ViewInstruction_anchor}>View Instructions</a></Flex>
                    <Button className={classes.review_work_button}>Review Work</Button>
                </Flex>
            </Accordion.Panel>
        </Accordion.Item >
    </>
}
export default PostedAssignmentAccordItem;