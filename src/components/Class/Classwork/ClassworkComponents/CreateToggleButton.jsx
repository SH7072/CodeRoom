import React from 'react'
import { Menu, Button, rem, Modal, ActionIcon, Title, createStyles, Flex, Text } from '@mantine/core';
import { IconExternalLink, IconPlus, IconCodeCircle2, IconHelpHexagon, IconNotes, IconArticleFilledFilled, IconX, IconCircleChevronDown, IconChevronDown, IconClipboardText } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    modalHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.xl,
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

}));

const CreateToggleButton = () => {

    const { classes } = useStyles();
    const [openedAssignmentModal, setOpenedAssignmentModal] = React.useState(false);

    return (
        <>
            <div>
                <Menu width={200} border-radius={40}
                    shadow="md">
                    <Menu.Target>

                        <Button radius={"15rem"} style={{ backgroundColor: "green" }}>
                            <IconPlus />Create</Button>
                    </Menu.Target>

                    <Menu.Dropdown>


                        <Menu.Item
                            icon={<IconCodeCircle2 size={rem(14)} />}
                            component="a"
                            href="https://mantine.dev"
                            target="_blank"
                        >
                            Live Coding Assignment
                        </Menu.Item>

                        <Menu.Item
                            icon={<IconHelpHexagon size={rem(14)} />}
                            component="a"
                            href="https://mantine.dev"
                            target="_blank"
                        >
                            Quiz Assignment
                        </Menu.Item>

                        <Menu.Item
                            icon={<IconClipboardText size={rem(14)} />}
                            // component="a"
                            // href="https://mantine.dev"
                            // target="_blank"
                            component='button'
                            onClick={() => setOpenedAssignmentModal(!openedAssignmentModal)}
                        >
                            Assignment
                        </Menu.Item>

                        <Menu.Item
                            icon={<IconNotes size={rem(14)} />}
                            component="a"
                            href="https://mantine.dev"
                            target="_blank"
                        >
                            Material
                        </Menu.Item>

                        <Menu.Item
                            icon={<IconExternalLink size={rem(14)} />}
                            component="a"
                            href="https://mantine.dev"
                            target="_blank"
                        >
                            External link
                        </Menu.Item>

                    </Menu.Dropdown>
                </Menu>
            </div>

            <Modal.Root
                opened={openedAssignmentModal}
                onClose={() => setOpenedAssignmentModal(!openedAssignmentModal)}
                title="This is a fullscreen modal"
                fullScreen
                transitionProps={{ transition: 'fade', duration: 200 }}
            >
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header sx={classes.modalHeader} >
                        <Flex justify={'center'} align={'center'}>
                            <ActionIcon variant="subtle" onClick={() => setOpenedAssignmentModal(!openedAssignmentModal)} sx={classes.actionIcon} size={'2rem'}>
                                <IconX size="2rem" />
                            </ActionIcon>
                            <ActionIcon variant="outline" sx={classes.actionIcon} color='green'>
                                <IconClipboardText height={'2rem'} width={'1.5rem'} color='green' />
                            </ActionIcon>
                            <Text size={'20px'}>Assignment</Text>
                        </Flex>
                        <Button variant="filled" color="green">
                            Assign
                        </Button>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>

        </>
    )
}

export default CreateToggleButton

