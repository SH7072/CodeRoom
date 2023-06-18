import { ActionIcon, Box, Button, FileButton, Flex, Group, Input, List, Modal, Select, Text, createStyles } from "@mantine/core";
import { IconClipboardText, IconX } from "@tabler/icons-react";
import TextAreaEditor from "./TextAreaEditor";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import DropzoneButton from "./DropzoneButton";
import DisplayFile from "./DisplayFile";
import { useDispatch } from "react-redux";
import { createClassWork } from "../../../../redux/actions/classWork";

const useStyles = createStyles((theme) => ({
    modalHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: theme.spacing.xl,
        height: '5vh',
        maxHeight: '5vh',
        borderBottom: '2px solid #e9ecef',
    },
    actionIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        marginRight: theme.spacing.md,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        },
    },
    mainBody: {
        // width: '100%',
        height: '86vh',
        // minHeight: 'max-content',
        // maxHeight: 'max-content',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        padding: 0,
        margin: 0,
    },
    leftContainer: {
        width: '75%',
        height: '100%',
        backgroundColor: '#f8f9fa',
        borderRight: '2px solid #e9ecef',
        flexDirection: 'column',
        padding: '1rem',
        // justifyContent: 'center',
        alignContent: 'center',
        // margin: '0 auto 0 auto',
    },
    rightContainer: {
        width: '25%',
        height: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        padding: '1rem',
    },
    titleAndInstructionsContainer: {
        width: '70%',
        // height: '50%',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        padding: '1rem',
        alignSelf: 'center',
        marginBottom: '20px',
    },
    uploadFilesContainer: {
        width: '70%',
        height: '100px',
        // height: '50%',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        padding: '1rem',
        alignSelf: 'center',
    }


}));

const AssignmentModal = ({ classInfo, openedAssignmentModal, setOpenedAssignmentModal }) => {

    const { classes } = useStyles();
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [classRoom, setClassRoom] = useState(classInfo._id);
    const [assignedTo, setAssignedTo] = useState([]);
    const [dueDate, setDueDate] = useState(null);
    const [points, setPoints] = useState(100);
    const [topic, setTopic] = useState(null);

    const dispatch = useDispatch();


    const closeAssignmentModal = () => {
        setFiles([]);
        setTitle('');
        setInstructions('');
        setClassRoom(classInfo._id);
        setAssignedTo([]);
        setDueDate(null);
        setPoints(100);
        setTopic(null);
        setOpenedAssignmentModal(!openedAssignmentModal);
    };

    const cancelSelection = (file) => {
        console.log(file);
        setFiles(files.filter((f) => f !== file));
    };

    const handleAssign = () => {
        dispatch(createClassWork(
            title,
            instructions,
            dueDate,
            points,
            topic,
            files,
            classRoom,
            assignedTo,
        ));
        closeAssignmentModal();

    };

    return (
        <>
            <Modal.Root
                opened={openedAssignmentModal}
                onClose={closeAssignmentModal}
                fullScreen
                transitionProps={{ transition: 'fade', duration: 200 }}
            >
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header sx={classes.modalHeader} >
                        <Flex justify={'center'} align={'center'}>
                            <ActionIcon variant="subtle" onClick={closeAssignmentModal} sx={classes.actionIcon} size={'2rem'}>
                                <IconX size="2rem" />
                            </ActionIcon>
                            <ActionIcon variant="outline" sx={classes.actionIcon} color='green'>
                                <IconClipboardText height={'2rem'} width={'1.5rem'} color='green' />
                            </ActionIcon>
                            <Text size={'20px'}>Assignment</Text>
                        </Flex>
                        {title.length > 0 ? (
                            <Button variant="filled" color="green" onClick={handleAssign}>
                                Assign
                            </Button>
                        ) :
                            <Button variant="filled" color="gray" disabled>
                                Assign
                            </Button>
                        }
                    </Modal.Header>
                    <Modal.Body sx={classes.mainBody}>
                        <Flex sx={classes.mainContainer}>
                            <Flex sx={classes.leftContainer}>
                                <Flex sx={classes.titleAndInstructionsContainer} gap={10}>
                                    <Input.Wrapper label="Title">
                                        <Input
                                            value={title}
                                            onChange={(e) => setTitle(e.currentTarget.value)}
                                        />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Instructions">
                                        <TextAreaEditor
                                            instructions={instructions}
                                            setInstructions={setInstructions}
                                        />
                                    </Input.Wrapper>
                                    <Flex direction='column' gap={'10px'}>
                                        {files.map((file, index) => (
                                            <DisplayFile key={index} file={file} cancelSelection={cancelSelection} />
                                        ))}
                                    </Flex>
                                </Flex>
                                <Flex sx={classes.uploadFilesContainer} >
                                    <DropzoneButton setFiles={setFiles} />
                                </Flex>
                            </Flex>
                            <Flex sx={classes.rightContainer} gap={10}>
                                <Input.Wrapper label="For" size="md" />
                                <Flex gap={10}>
                                    <Select
                                        size="md"
                                        value={classRoom}
                                        onChange={setClassRoom}
                                        data={[
                                            { value: classInfo._id, label: classInfo.className },
                                        ]}
                                    />
                                    <Select
                                        size="md"
                                        value={assignedTo}
                                        defaultValue={'all'}
                                        onChange={setAssignedTo}
                                        data={[
                                            { value: 'all', label: 'All Students' },
                                        ]}
                                    />
                                </Flex>
                                <Input.Wrapper label='Points' size="md">
                                    <Input
                                        value={points}
                                        onChange={(e) => setPoints(e.currentTarget.value)}
                                        size="md"
                                    />
                                </Input.Wrapper>
                                <DateInput
                                    value={dueDate}
                                    onChange={setDueDate}
                                    label='Due'
                                    size="md"
                                />
                                <Select
                                    label='Topic'
                                    size="md"
                                    data={[
                                        { value: 'react', label: 'React' },
                                        { value: 'ng', label: 'Angular' },
                                        { value: 'svelte', label: 'Svelte' },
                                        { value: 'vue', label: 'Vue' },
                                    ]}
                                />
                            </Flex>
                        </Flex>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root >
        </>
    );
}

export default AssignmentModal;