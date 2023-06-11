import React from 'react'
import { Menu, Button, rem } from '@mantine/core';
import { IconExternalLink,IconPlus,IconCodeCircle2,IconHelpHexagon,IconNotes,IconArticleFilledFilled  } from '@tabler/icons-react';

const CreateToggleButton = () => {
    return (
        <div>
            <Menu width={200} border-radius={40}
                shadow="md">
                <Menu.Target>
                    
                    <Button   radius={"15rem"} style={{ backgroundColor: "green" }}>
                    <IconPlus/>Create</Button>
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
                        icon={<IconArticleFilledFilled size={rem(14)} />}
                        component="a"
                        href="https://mantine.dev"
                        target="_blank"
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
    )
}

export default CreateToggleButton

