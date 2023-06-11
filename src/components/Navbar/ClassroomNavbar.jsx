import { createStyles, Header, Autocomplete, Group, Burger, rem, Title, Drawer, ScrollArea, Menu, Space, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import ClassroomSidebar from './ClassroomSidebar';
import UserMenu from './UserMenu';
import Create from './Create';
// import { MantineLogo } from '@mantine/ds';


const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
}));

// const links = [
//     {
//         "link": "/about",
//         "label": "Features"
//     },
//     {
//         "link": "/pricing",
//         "label": "Pricing"
//     },
//     {
//         "link": "/learn",
//         "label": "Learn"
//     },
//     {
//         "link": "/community",
//         "label": "Community"
//     }
// ];

// const data = [
//     { link: '/', label: 'Notifications', icon: IconBellRinging },
//     { link: '/', label: 'Billing', icon: IconReceipt2 },
//     { link: '/', label: 'Security', icon: IconFingerprint },
//     { link: '/', label: 'SSH Keys', icon: IconKey },
//     { link: '/', label: 'Databases', icon: IconDatabaseImport },
//     { link: '/', label: 'Authentication', icon: Icon2fa },
//     { link: '/', label: 'Other Settings', icon: IconSettings },
// ];

const ClassroomNavbar = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    return (
        <>
            <Header height={'8vh'} className={classes.header}>
                <div className={classes.inner}>
                    <Group>
                        <Burger opened={opened} onClick={toggle} size="sm" />
                        <Title order={3} style={{ marginLeft: 10 }}>
                            CodeRoom
                        </Title>
                    </Group>
                    <Drawer
                        opened={opened}
                        onClose={toggle}
                        withCloseButton={false}
                        overlayProps={{ opacity: 0.5, blur: 4 }}
                        scrollAreaComponent={ScrollArea.Autosize}
                        size="xs"
                    >
                        <ClassroomSidebar />
                    </Drawer>

                    <Flex>
                        <Create />
                        <UserMenu />
                    </Flex>
                </div>
            </Header>
        </>
    );
}

export default ClassroomNavbar;