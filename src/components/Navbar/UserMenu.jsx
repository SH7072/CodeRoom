import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Group, Avatar, Menu, UnstyledButton, createStyles } from '@mantine/core';
import { forwardRef } from 'react';


const image = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"


const UserButton = forwardRef(({ ...others }, ref) => {
    return (
        <>
            <UnstyledButton
                ref={ref}
                sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: '4px',
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    borderRadius: '50%',

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
                        // backgroundRadius: theme.radius.sm,
                    },

                })}
                {...others}
            >
                <Group>
                    <Avatar src={image} radius={'xl'} />
                </Group>
            </UnstyledButton >
        </>
    );
});

const useStyles = createStyles((theme) => ({
}));


const UserMenu = () => {

    const { classes, theme } = useStyles();



    return (
        <>
            <Menu
                width={260}
                transitionProps={{ transition: 'pop-top-right' }}
                withinPortal
                shadow='md'
            >
                <Menu.Target>
                    <UserButton />
                </Menu.Target>
                <Menu.Dropdown mr={10} w={'100px'}>
                    <Menu.Item
                        icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
                    >
                        Liked posts
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconStar size="0.9rem" color={theme.colors.yellow[6]} stroke={1.5} />}
                    >
                        Saved posts
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconMessage size="0.9rem" color={theme.colors.blue[6]} stroke={1.5} />}
                    >
                        Your comments
                    </Menu.Item>

                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                        Account settings
                    </Menu.Item>
                    <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                        Change account
                    </Menu.Item>
                    <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
                        Pause subscription
                    </Menu.Item>
                    <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
                        Delete account
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
}

export default UserMenu;