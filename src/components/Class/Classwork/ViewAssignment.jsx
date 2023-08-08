import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { BsFilePersonFill, BsThreeDotsVertical, BsFillPeopleFill } from 'react-icons/bs';
import { createStyles, Button, Flex, Menu } from "@mantine/core";
const useStyles = createStyles((theme) => ({
    parent_container: {
        backgroundColor: 'white',
        width: "70vw",
        margin: "10vh auto",
        padding: "1rem"
    },
    child1_container: {
        width: "70%",
        // border: "1px solid black",
        flexDirection: "column",
        padding: "10px",
        marginRight: "1rem",
    },
    child2_container: {
        width: "30%",
        // border: "1px solid black",
        flexDirection: "column",
        padding: "10px",

    },
    child1_child1_container: {
        borderBottom: "1px solid black",
        // height: "20vh",
        // padding: "1rem",
        flexDirection: "column",
    },
    title_container: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    Assignment_title: {
        fontSize: "2rem",
    },
    child2_child1_container: {
        borderBottom: "1px solid black",
        // height: "20vh",

    },
    assignment_description: {
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    child3_child1_container: {
        // borderBottom: "1px solid black",
        flexDirection: "column"
        // height: "20vh",

    },
    class_comment_title: {
        marginTop: "1rem",
        alignItems: "center",

    },
    add_class_comment: {
        marginTop: ".7rem",
        marginBottom: "1rem",
        fontWeight: "bolder",
    },
    child1_child2_contianer: {
        // border: "1px solid black",
        // height: "30vh",
        marginBottom: "1rem",
        borderRadius: ".5rem",
        padding: ".5rem",

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",


    },
    child2_child2_contianer: {
        // border: "1px solid black",
        // height: "20vh",
        flexDirection: "column",
        borderRadius: ".5rem",
        padding: ".5rem",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
    privateComment_box: {
        padding: ".5rem",
        borderBottom: "1px solid gray",
    },
    privateComment_text: {
        marginLeft: "1rem",
        color: "gray",
        width: "100%",
        height: "1.5rem",
        border: "none",
        padding: "2px",
        fontSize: "1rem",
    },
    add_private_comment_text: {
        padding: ".5rem",
        fontFamily: "sans-serif",


        // border: "1px solid black",
    },


    yourWork: {
        width: "90%",
        marginTop: "1rem",
        height: "2rem",
        justifyContent: "space-between",
    },
    assignment_files: {
        height: "3rem",
        width: "90%",
        border: "1px solid gray",
        marginBottom: "1rem",
        borderRadius: ".5rem",
    },
    image_box: {
        borderRight: "1px solid gray",
        width: "20%",
    },
    filename_box: {
        width: "60%",
        overflow: "hidden",
        // border: "1px solid black",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "5px",
    },
    crossButton_box: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",

        // border: "1px solid black",
    },
    buttonContainer: {
        flexDirection: "column",
        // height: "6rem",
        width: "100%",
        alignItems: "center",
        marginBottom: "1rem",

    },
    add_or_create: {
        width: "90%",
        height: "2rem",
        marginBottom: ".5rem",
        border: "none",
        backgroundColor: "#BFDB38",
        '&:hover': {
            backgroundColor: "#D3D04F",

        }
    },

    submit: {
        width: "90%",
        height: "2rem",
        border: "none",
        backgroundColor: "black",
        color: "white",
    },






}));
const ViewAssignment = () => {

    const { classes, theme } = useStyles();

    return <>
        <Flex className={classes.parent_container}>
            <Flex className={classes.child1_container}>
                <Flex className={classes.child1_child1_container}>
                    <Flex className={classes.title_container}>
                        <div className={classes.Assignment_title}>Class Participation Report</div>
                        <div style={{ marginRight: "1rem" }}><BsThreeDotsVertical></BsThreeDotsVertical></div>
                    </Flex>
                    <Flex style={{ alignItems: "center", height: "2rem", }}>
                        <div style={{ marginRight: ".5rem", color: "gray", fontSize: "1rem" }}>Dr. Shobhit Gupta</div>
                        <div style={{ color: "gray" }} >*</div>
                        <div style={{ marginLeft: ".5rem", color: "gray", fontSize: "1rem" }}> Apr 13</div>
                    </Flex>
                    <Flex style={{ alignItems: "center", height: "2rem", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <div>22/30</div>
                        <div>Due Apr 21</div>

                    </Flex>
                </Flex>
                <Flex className={classes.child2_child1_container}>
                    <div className={classes.assignment_description}>Dear Students, Please make a report on your class participation and have it authenticated with one of your classmates.
                        Use the photos and other evidence to substantiate.
                        <br />
                        Regards,
                        <br />
                        Shobhit
                    </div>
                </Flex>
                <Flex className={classes.child3_child1_container}>
                    <Flex className={classes.class_comment_title}>
                        <BsFillPeopleFill size={"1.5rem"}></BsFillPeopleFill>
                        <div style={{ marginLeft: "1rem", fontFamily: "sans-serif" }}>Class Comments</div>
                    </Flex>
                    <Flex></Flex>
                    <Flex className={classes.add_class_comment}>Add a class Comment</Flex>
                </Flex>
            </Flex>
            <Flex className={classes.child2_container}>
                <Flex className={classes.child1_child2_contianer}>
                    <Flex className={classes.yourWork}>
                        <div style={{ fontFamily: "sans-serif", fontSize: "1.2rem", }}>Your work</div>
                        <div style={{ color: "gray", }}>Graded</div>
                    </Flex>
                    <Flex className={classes.assignment_files}>
                        <Flex className={classes.image_box}><img src="" alt="" /></Flex>
                        <Flex className={classes.filename_box}>
                            <div className={classes.filename}>S20200010195_assignment2</div>
                            <div className={classes.fileFormat}>PDF</div>
                        </Flex>
                        <Flex className={classes.crossButton_box}><AiOutlineClose></AiOutlineClose></Flex>
                    </Flex>
                    <Flex className={classes.assignment_files}>
                        <Flex className={classes.image_box}><img src="" alt="" /></Flex>
                        <Flex className={classes.filename_box}>
                            <div className={classes.filename}>S20200010195_assignment2</div>
                            <div className={classes.fileFormat}>PDF</div>
                        </Flex>
                        <Flex className={classes.crossButton_box}><AiOutlineClose></AiOutlineClose></Flex>
                    </Flex>
                    <Flex className={classes.assignment_files}>
                        <Flex className={classes.image_box}><img src="" alt="" /></Flex>
                        <Flex className={classes.filename_box}>
                            <div className={classes.filename}>S20200010195_assignment2</div>
                            <div className={classes.fileFormat}>PDF</div>
                        </Flex>
                        <Flex className={classes.crossButton_box}><AiOutlineClose></AiOutlineClose></Flex>
                    </Flex>
                    <Flex className={classes.buttonContainer}>
                        <button className={classes.add_or_create}>Add or Create</button>
                        <button className={classes.submit}>Submit</button>
                    </Flex>
                </Flex>
                <Flex className={classes.child2_child2_contianer}>
                    <Flex className={classes.privateComment_box}>
                        <BsFilePersonFill size={"1.5rem"} color={"gray"}></BsFilePersonFill>
                        <input className={classes.privateComment_text} type="text" id="fname" name="firstname" placeholder="Private Comment" />
                    </Flex>
                    <Flex className={classes.add_private_comment_text}>Add private comment to Dr. Shobhit Gupta</Flex>
                </Flex>
            </Flex>

        </Flex >
    </>
}

export default ViewAssignment;