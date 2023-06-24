import React, { useState } from 'react'
import { Menu, Button, rem } from '@mantine/core';
import { IconExternalLink, IconPlus, IconCodeCircle2, IconHelpHexagon, IconNotes, IconClipboardText } from '@tabler/icons-react';
import AssignmentModal from './AssignmentModal';
import { useSelector } from 'react-redux';


const CreateToggleButton = () => {

    const [openedAssignmentModal, setOpenedAssignmentModal] = useState(false);

    const loading = useSelector((state) => { return state.classes.loading });
    const classInfo = useSelector(state => state.classes.classInfo);

    // console.log(loading);
    // console.log(classInfo);

    return (
        <>
            {!loading && classInfo &&

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
                </div>}

            {classInfo && <AssignmentModal classInfo={classInfo} openedAssignmentModal={openedAssignmentModal} setOpenedAssignmentModal={setOpenedAssignmentModal}></AssignmentModal>}

        </>
    )
}

export default CreateToggleButton

