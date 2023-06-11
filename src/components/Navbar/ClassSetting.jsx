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


const SettingButton = forwardRef(({ ...others }, ref) => {
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
                    <IconSettings radius={'20%'} width={'40px'} opacity={'0.7'} height={'30px'} />
                </Group>
            </UnstyledButton >
        </>
    );
});

const useStyles = createStyles((theme) => ({
}));


const ClassSetting = () => {

    const { classes, theme } = useStyles();



    return (
        <>
            <SettingButton />
        </>
    );
}

export default ClassSetting;