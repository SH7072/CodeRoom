import { createStyles, Header, Autocomplete, Group, Burger, rem, Title, Drawer, ScrollArea, Menu, Space, Flex, Tabs, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import ClassroomSidebar from './ClassroomSidebar';
import UserMenu from './UserMenu';
import Create from './Create';
import ClassSettings from './ClassSetting';
import ClassSetting from './ClassSetting';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
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

    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
        // height: '100%',
        // minHeight: '100%',
    },
    tabsList: {
        height: '100%',
    },
    tab: {
        // height: '100%',
        padding: '0 30px',
    },
    panel: {
        // height: '100%',
    },
    tabLabel: {
        // fontFamily: 'sans-serif',
        // textDecoration: 'bold',
        fontWeight: 540,
        opacity: 0.8
    }


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

const ClassNavbar = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();
    const navigate = useNavigate();
    const param = useParams();

    // console.log(param);

    const loading = useSelector((state) => { return state.classes.loading });
    const classInfo = useSelector((state) => { return state.classes.classInfo });
    // const navState = useSelector((state) => { return state.classes.classNavState });

    const [tabValue, setTabValue] = useState('stream');

    const handleClick = () => {
        setTabValue('stream');
        navigate(`/class/${classInfo._id}/stream`);
    }

    return (
        <>
            {!loading && classInfo && (
                <Header height={'8vh'} className={classes.header}>
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
                    <div className={classes.inner}>
                        <Group>
                            <Burger opened={opened} onClick={toggle} size="sm" />
                            <Title order={3} style={{ marginLeft: 10 }} onClick={handleClick}>
                                {classInfo.className}
                            </Title>
                        </Group>

                        <Flex h={'100%'}>
                            <Tabs
                                value={tabValue}
                                onTabChange={(value) => {
                                    setTabValue(value);
                                    navigate(`/class/${classInfo._id}/${value}`);
                                }}


                                classNames={{
                                    root: classes.tabs,
                                    tabsList: classes.tabsList,
                                    tab: classes.tab,
                                    panel: classes.panel,
                                    tabLabel: classes.tabLabel,
                                }}
                            >
                                <Tabs.List position="center">
                                    <Tabs.Tab value="stream">Stream</Tabs.Tab>
                                    <Tabs.Tab value="classwork">Classwork</Tabs.Tab>
                                    <Tabs.Tab value="people">People</Tabs.Tab>
                                </Tabs.List>
                            </Tabs>
                        </Flex>

                        <Flex gap={20}>
                            {/* <Create /> */}
                            <ClassSetting />
                            <UserMenu />
                        </Flex>
                    </div>
                </Header >
            )
            }
        </>
    );
}

export default ClassNavbar;