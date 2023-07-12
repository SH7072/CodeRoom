import { useState } from 'react';
import { createStyles, getStylesRef, rem, Flex } from '@mantine/core';
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
    IconHome,
    IconSourceCode,
    IconArchive,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
        // width: '100%',
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        // width: '100%',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            [`& .${getStylesRef('icon')}`]: {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    },
}));


const data = [
    { link: '/', label: 'Notifications', icon: IconBellRinging },
    { link: '/', label: 'Billing', icon: IconReceipt2 },
    { link: '/', label: 'Security', icon: IconFingerprint },
    { link: '/', label: 'SSH Keys', icon: IconKey },
    { link: '/', label: 'Databases', icon: IconDatabaseImport },
    { link: '/', label: 'Authentication', icon: Icon2fa },
    { link: '/', label: 'Other Settings', icon: IconSettings },
    { link: '/', label: 'Notsdsifications', icon: IconBellRinging },
    { link: '/', label: 'Bilsdsdling', icon: IconReceipt2 },
    { link: '/', label: 'Secsdurity', icon: IconFingerprint },
    { link: '/', label: 'SSH Ksdseys', icon: IconKey },
    { link: '/', label: 'Databasesds', icon: IconDatabaseImport },
    { link: '/', label: 'Authenticasdstion', icon: Icon2fa },
    { link: '/', label: 'Other Settinsdsgs', icon: IconSettings },
];

const ClassroomSidebar = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <Link
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            to={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <>

            <Flex direction={'column'} h={'95vh'} justify={'space-between'}>
                {/* <Group position="apart"> */}
                <Flex direction={'column'}>
                    <Flex direction='column' className={classes.header} >
                        <Link to={'/classroom'} className={classes.link}>
                            <IconHome className={classes.linkIcon} stroke={1.5} />
                            <span>Classes</span>
                        </Link>
                        <Link to={'/archived'} className={classes.link}>
                            <IconArchive className={classes.linkIcon} stroke={1.5} />
                            <span>Archived Classes</span>
                        </Link>
                        <Link to={"/classroom"} className={classes.link}>
                            <IconSourceCode className={classes.linkIcon} stroke={1.5} />
                            <span>Code Editor</span>
                        </Link>

                    </Flex>

                    <Flex direction='column'>
                        {links}
                    </Flex>
                </Flex>


                <Flex direction='column' className={classes.footer}>
                    {/* <Link> href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                        <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                        <span>Change account</span>
                    </Link>

                    <Link> href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                        <IconLogout className={classes.linkIcon} stroke={1.5} />
                        <span>Logout</span>
                    </Link> */}
                </Flex>
            </Flex>
        </>
    );
}

export default ClassroomSidebar;
