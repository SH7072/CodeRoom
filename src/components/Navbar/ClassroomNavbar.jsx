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

const ClassroomNavbar = ({ }) => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    // const items = links.map((link) => (
    //     <a
    //         key={link.label}
    //         href={link.link}
    //         className={classes.link}
    //         onClick={(event) => event.preventDefault()}
    //     >
    //         {link.label}
    //     </a>
    // ));

    // const links = data.map((item) => (
    //     <a
    //         className={cx(classes.link, { [classes.linkActive]: item.label === active })}
    //         href={item.link}
    //         key={item.label}
    //         onClick={(event) => {
    //             event.preventDefault();
    //             setActive(item.label);
    //         }}
    //     >
    //         <item.icon className={classes.linkIcon} stroke={1.5} />
    //         <span>{item.label}</span>
    //     </a>
    // ));

    return (
        <>
            {/* {opened && <ClassroomSidebar />} */}
            <Header height={56} className={classes.header}>
                <div className={classes.inner}>
                    <Group>
                        <Burger opened={opened} onClick={toggle} size="sm" />
                        {/* <MantineLogo size={28} /> */}
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
                        {/* <Group ml={50} spacing={5} className={classes.links}> */}
                        {/* <Menu> */}
                        <Create />
                        <UserMenu />
                        {/* <Space h="md" /> */}
                        {/* </Menu> */}
                        {/* </Group> */}

                    </Flex>
                </div>
            </Header>
        </>
    );
}

export default ClassroomNavbar;