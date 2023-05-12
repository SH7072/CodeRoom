import { Menu, UnstyledButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { forwardRef } from "react";


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

const Create = () => {
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
                    <Menu.Item
                    // icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
                    >
                        Join Class
                    </Menu.Item>
                    <Menu.Item
                    // icon={<IconStar size="0.9rem" color={theme.colors.yellow[6]} stroke={1.5} />}
                    >
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
        </>
    );
}

export default Create;