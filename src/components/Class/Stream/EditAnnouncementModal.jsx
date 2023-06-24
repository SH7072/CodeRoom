import { ActionIcon, Button, FileButton, Flex, Menu, Modal, Select, Text, Tooltip, createStyles } from "@mantine/core";
import { IconSpeakerphone, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { BsCaretDownFill, BsLink, BsUpload } from "react-icons/bs";
import { useState } from "react";
import { editAnnouncement } from "../../../redux/actions/announcement";
import DisplayFile from "../../Layout/DisplayFile";
import TextAreaEditor from "../TextAreaEditor";


const useStyles = createStyles((theme) => ({
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
    mainBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },

    modalHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #e0e0e0",

    },
    forFormat: {
        marginBottom: "10px",
    }

}));

const formatDate = (date) => {
    if (!date) return null;
    return new Date(date);
}

const EditAnnouncementModal = ({ announcementInfo, setAnnouncementInfo, openAnnouncementModal, setOpenAnnouncementModal, role }) => {

    const { classes } = useStyles();
    const dispatch = useDispatch();

    const [assignedTo, setAssignedTo] = useState(announcementInfo.assignedTo);
    const [instructions, setInstructions] = useState(announcementInfo.announcement);
    const [files, setFiles] = useState(announcementInfo.attachments);


    const closeAnnouncementModal = () => {
        setOpenAnnouncementModal(!openAnnouncementModal);
        setAnnouncementInfo(null);
    };

    const cancelSelection = (file) => {
        console.log(file);
        setFiles(files.filter((f) => f !== file));
    };

    const saveAnnouncementChanges = () => {
        dispatch(editAnnouncement({
            announcementId: announcementInfo._id,
            classId: announcementInfo.classId,
            assignedTo,
            instructions,
            files
        }));
        closeAnnouncementModal();
        setAnnouncementInfo(null);
    };

    return (
        <>
            <Modal.Root
                opened={openAnnouncementModal}
                onClose={closeAnnouncementModal}
                transitionProps={{ transition: 'fade', duration: 200 }}
                size={'xl'}
            >
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header sx={classes.modalHeader} >
                        <Flex gap={'10px'} m={0}>
                            <IconSpeakerphone />
                            <Text size={'sm'} weight={500}>Edit Announcement</Text>
                        </Flex>
                        <ActionIcon onClick={closeAnnouncementModal}>
                            <IconX />
                        </ActionIcon>
                    </Modal.Header>
                    <Modal.Body sx={classes.mainBody}>
                        <Flex direction={'column'}>
                            {
                                role === 'teacher' && (
                                    <>
                                        <p className={classes.forFormat}>For</p>
                                        <Flex mb={'1rem'} gap={'1rem'}>
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
                                        return <DisplayFile file={file} cancelSelection={cancelSelection} key={index} size={'full'}></DisplayFile>
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
                                    <Button onClick={closeAnnouncementModal} style={{ marginRight: "1rem", backgroundColor: "#FAD4D4", color: "gray" }}>Cancel</Button>
                                    {
                                        (files.length > 0 || instructions.length > 7) ?
                                            <Button style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", marginRight: "3px", backgroundColor: "#202124", color: "white" }} onClick={saveAnnouncementChanges}>Save</Button>
                                            :
                                            <Button style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", marginRight: "3px", backgroundColor: "#D8D8D8", color: "gray" }} disabled>Save</Button>
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
                        </Flex>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root >
        </>
    );
}

export default EditAnnouncementModal;