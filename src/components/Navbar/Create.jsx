import { Button, Container, Flex, Input, Menu, Modal, Text, UnstyledButton, createStyles } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClass, joinClass } from "../../redux/actions/class";
import { useNavigate } from "react-router-dom";


const CreateButton = forwardRef(({ ...others }, ref) => {
    return (
        <>
            <UnstyledButton
                ref={ref}
                sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: '4px',
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    borderRadius: '48%',

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
                        // backgroundRadius: theme.radius.sm,
                    },

                })}
                {...others}
            >
                <IconPlus size={'2.375rem'} />

            </UnstyledButton >
        </>
    );
});


const useStyles = createStyles((theme) => ({
    input: {
    },
}));

const Create = () => {

    const { classes } = useStyles();
    // const { ref, focused } = useFocusWithin();
    const [createClassOpen, setCreateClassOpen] = useState(false);
    const [joinClassOpen, setJoinClassOpen] = useState(false);
    // const [showLabel, setShowLabel] = useState(false);
    const [className, setClassName] = useState("");
    const [section, setSection] = useState("");
    const [subject, setSubject] = useState("");
    const [classCode, setClassCode] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { classInfo } = useSelector(state => state.classes);

    const handleCreateClass = async () => {
        await dispatch(createClass(className, section, subject, navigate));

        navigate(`/class/${classInfo.id}`);

        handleCreateClose();





    }
    const handleCreateClose = () => {
        setCreateClassOpen(false);
        setClassName("");
        setSection("");
        setSubject("");
    }
    const handleJoinClass = () => {
        dispatch(joinClass(classCode, navigate));
        handleJoinClose();
    }
    const handleJoinClose = () => {
        setJoinClassOpen(false);
        setClassCode("");
    }

    return (
        <>
            <Menu
                width={130}
                transitionProps={{ transition: 'pop-top-right' }}
                withinPortal
                // shadow='md'
                mr={15}
            >
                <Menu.Target>
                    <CreateButton />
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item onClick={() => setJoinClassOpen(true)}>
                        Join Class
                    </Menu.Item>
                    <Menu.Item onClick={() => setCreateClassOpen(true)}>
                        Create Class
                    </Menu.Item>
                    <Menu.Item
                    // icon={<IconSettings size="0.9rem" color={theme.colors.blue[6]} stroke={1.5} />}
                    >
                        Join Interview
                    </Menu.Item>
                    <Menu.Item
                    // icon={<IconLogOut size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
                    >
                        Create Interview
                    </Menu.Item>
                </Menu.Dropdown>

            </Menu>

            <Modal opened={createClassOpen} onClose={handleCreateClose} title="Create Class" centered radius={'lg'} size={'520px'}>
                <Container fluid={true} m={0} p={0}>
                    <Input.Wrapper label="Classname" required>
                        <Input
                            placeholder="Classname"
                            value={className}
                            onChange={(e) => setClassName(e.currentTarget.value)}
                        />
                    </Input.Wrapper>


                    <Input.Wrapper label="Section">
                        <Input
                            placeholder="Section"
                            sx={classes.input}
                            value={section}
                            onChange={(e) => setSection(e.currentTarget.value)}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper label="Subject">
                        <Input
                            placeholder="Subject"
                            sx={classes.input}
                            value={subject}
                            onChange={(e) => setSubject(e.currentTarget.value)}
                        />
                    </Input.Wrapper>
                    <Flex justify={'flex-end'} gap={'10px'} mt={'20px'}>
                        <Button variant="subtle" color="gray" onClick={handleCreateClose}>
                            Cancel
                        </Button>
                        {className.length > 0 ?
                            <Button variant="subtle" color="blue" onClick={handleCreateClass}>
                                Create
                            </Button>
                            :
                            <Button variant="subtle" color="gray" disabled>
                                Create
                            </Button>
                        }

                    </Flex>
                </Container>

            </Modal >

            <Modal opened={joinClassOpen} onClose={handleJoinClose} title="Join Class" centered radius={'lg'} size={'520px'}>
                <Container fluid={true} m={0} p={0}>
                    <Input.Wrapper label="Class Code" size="md">
                        <Text color="dimmed">
                            Ask your teacher for the class code, then enter it here.
                        </Text>
                        <Input
                            mt={10}
                            placeholder="Class Code"
                            value={classCode}
                            onChange={(e) => setClassCode(e.currentTarget.value)}
                            maw={200}
                            size="lg"
                        />
                    </Input.Wrapper>
                    <Flex justify={'flex-end'} gap={'10px'} mt={'20px'}>
                        <Button variant="subtle" color="gray" onClick={handleJoinClose}>
                            Cancel
                        </Button>
                        {classCode.length === 6 ?
                            <Button variant="subtle" color="blue" onClick={handleJoinClass}>
                                Join
                            </Button>
                            :
                            <Button variant="subtle" color="gray" disabled>
                                Join
                            </Button>
                        }

                    </Flex>
                </Container>

            </Modal >
        </>
    );
}

export default Create;