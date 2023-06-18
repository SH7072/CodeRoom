import { createStyles, Button, Flex, Avatar, Select, Tooltip, Menu, Modal, Text, FileButton } from "@mantine/core";
import { useDisclosure, useHover } from '@mantine/hooks';
import React from "react";
import { DateInput } from '@mantine/dates';
import { useState } from "react";
import { BsArrowLeftRight, BsUpload, BsLink, BsCaretDownFill } from 'react-icons/bs';
import TextAreaEditor from "../../Classwork/ClassworkComponents/TextAreaEditor";
import DisplayFile from "../../Classwork/ClassworkComponents/DisplayFile";
import { useDispatch } from "react-redux";
import { createAnnouncement } from "../../../../redux/actions/announcement";


const useStyles = createStyles((theme) => ({
    announcement_container: {
        backgroundColor: "white",
        width: 'calc(100%-2rem)',
        height: "5rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        // boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "8px",
        border: "0px solid gray",
        // padding: "3px",
        alignItems: "center",

    },
    open_announcement_container: {
        backgroundColor: "white",
        width: 'calc(100%-2rem)',
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "8px",
        border: "0px solid gray",
        // padding: "3px",
        flexDirection: "column",
        padding: "1rem",
    },
    select_button: {
        marginLeft: "1rem",
        // width: "20%",
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

        justifyContent: "space-between",
        padding: "1rem 0 0 0",
    },
    announcement_round_button: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
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
    modal_upload_container: {
        marginLeft: "-5%",
    },



}));
const AnnouncementCard = ({ classInfo, role }) => {

    const { classes, theme } = useStyles();
    const [showDiv1, setShowDiv1] = useState(true);
    const [value, setValue] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);

    const dispatch = useDispatch();


    const { hovered, ref } = useHover();

    const [files, setFiles] = useState([]);
    const [instructions, setInstructions] = useState("");
    const [classId, setClassId] = useState(classInfo._id);
    // const [assignedTo, setAssignedTo] = useState("All Students");

    const toggleDiv = () => {
        setShowDiv1(!showDiv1);
        setFiles([]);
        setInstructions("");
    };

    const cancelSelection = (file) => {
        setFiles(files.filter((f) => f !== file));
    }

    const submitAnnouncement = () => {
        console.log("submitting announcement");
        console.log("classId", classId);
        console.log("instructions", instructions);
        console.log("files", files);
        console.log("assignedTo", "All Students");

        dispatch(createAnnouncement(classId, instructions, files, []));
        toggleDiv();
    }

    return <>
        <div >

            {showDiv1 ?
                <Flex className={classes.announcement_container} onClick={toggleDiv} gap={'1rem'} pl={'1rem'} pr={'1rem'} ref={ref} >
                    <Avatar radius={"xl"}></Avatar>
                    {hovered ? <Text color="bold" sx={{ fontFamily: 'Sans Serif' }}>Announce something to your class</Text> : <Text color="dimmed" sx={{ fontFamily: 'Sans Serif' }}>Announce something to your class</Text>}
                    {/* <BsArrowLeftRight size="1.3rem" style={{ position: "relative", left: "52%", color: "gray", }}></BsArrowLeftRight> */}
                </Flex>
                :
                <Flex className={classes.open_announcement_container}>
                    {
                        role === 'teacher' && (
                            <>
                                <p>For</p>
                                <Flex mb={'1rem'} gap={'1rem'}>
                                    <Select disabled value={classId} onChange={setClassId}
                                        data={[
                                            { value: classInfo._id, label: classInfo.className },
                                            { value: 'class B', label: 'Class B' },
                                            { value: 'class C', label: 'Class C' },
                                            { value: 'class D', label: 'Class D' },
                                            { value: 'class E', label: 'Class E' },
                                        ]}>

                                    </Select>
                                    <Select placeholder="All Students"
                                        data={[
                                            { value: 'All Students', label: 'All Students' },
                                        ]}>
                                    </Select>
                                </Flex>
                            </>
                        )
                    }

                    <TextAreaEditor instructions={instructions} setInstructions={setInstructions}></TextAreaEditor>

                    {files.length > 0 && <Flex direction={'column'} gap={'1rem'} pt={'1rem'}>
                        {
                            files.map((file, index) => {
                                return <DisplayFile file={file} cancelSelection={cancelSelection} key={index}></DisplayFile>
                            })
                        }
                    </Flex>}

                    <Flex pt={'1rem'} justify={'space-between'}>
                        <Flex gap={'1rem'}>
                            <Tooltip label="Upload Files" style={{ backgroundColor: "green", color: "#DFFFD8" }}>
                                <FileButton className={classes.announcement_round_button} onChange={setFiles} multiple>
                                    {(props) =>
                                        <Button {...props} ><BsUpload size={"1.2rem"} color="green"></BsUpload></Button>
                                    }
                                </FileButton>
                            </Tooltip>
                            <Tooltip label="Add Link" style={{ backgroundColor: "green", color: "#DFFFD8" }}>
                                <Button className={classes.announcement_round_button} ><BsLink size={"1.2rem"} color="green"></BsLink> </Button>
                            </Tooltip>

                        </Flex>
                        <Flex align={'center'}>
                            <Button onClick={toggleDiv} style={{ marginRight: "1rem", backgroundColor: "#FAD4D4", color: "gray" }}>Cancel</Button>
                            {
                                (files.length > 0 || instructions.length > 7) ?
                                    <Button style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", marginRight: "3px", backgroundColor: "#202124", color: "white" }} onClick={submitAnnouncement}>Post</Button>
                                    :
                                    <Button style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", marginRight: "3px", backgroundColor: "#D8D8D8", color: "gray" }} disabled>Post</Button>
                            }
                            <Menu shadow="md" width={100} position="right-start" withArrow arrowPosition="center"  >
                                <Menu.Target>
                                    {
                                        (files.length > 0 || instructions.length > 7) ?
                                            <Button style={{ backgroundColor: "#202124", color: "white", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}> <BsCaretDownFill></BsCaretDownFill></Button>
                                            :
                                            <Button style={{ backgroundColor: "#D8D8D8", color: "gray", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} disabled> <BsCaretDownFill></BsCaretDownFill></Button>
                                    }
                                </Menu.Target>
                                {
                                    (files.length > 0 || instructions.length > 7) &&
                                    <Menu.Dropdown>
                                        <Menu.Item>Post</Menu.Item>
                                        <Menu.Item>Schedule</Menu.Item>
                                        <Menu.Item>Save Draft</Menu.Item>
                                    </Menu.Dropdown>
                                }
                            </Menu>

                        </Flex>

                    </Flex>
                </Flex>}
        </div>
    </>
}
export default AnnouncementCard;