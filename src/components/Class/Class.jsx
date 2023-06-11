import { IconDotsVertical, IconFolder, IconPresentation } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    Group,
    Avatar,
    createStyles,
    rem,
    Menu,
    UnstyledButton,
    Space,
    Flex,
} from '@mantine/core';
import { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadClass } from '../../redux/actions/class';

const useStyles = createStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'flex-end',
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        margin: '15px',
        width: '300px',
        height: '300px',
    },

    options: {
        display: 'block',
        marginTop: '13px',
        marginBottom: rem(5),
        position: 'absolute',
        top: theme.spacing.xs,
        right: rem(12),
        // pointerEvents: 'none',
    },

    title: {
        display: 'block',
        marginTop: '5px',
        marginBottom: rem(5),
        position: 'absolute',
        top: theme.spacing.xs,
        left: rem(12),
        width: '250px',
    },

    link: {
        textDecoration: 'none',
    },

    description: {
        display: 'block',
        // marginTop: theme.spacing.md,
        // marginBottom: rem(5),
        position: 'absolute',
        top: rem(12),
        left: rem(12),
    },


    action: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        // marginRight: theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: 'black',
        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),
    },

    footer: {
        marginTop: theme.spacing.md,
        position: 'absolute',
        top: rem(50),
        right: rem(12),
        pointerEvents: 'none',
    },
}));

const data = {
    "image": "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "link": "https://mantine.dev/",
    "title": "Resident Evil Village review kjfdb dnmws dw s",
    "rating": "outstanding",
    "description": "A",
    "author": {
        "name": "Bill Wormeater sjdbsa dmswa djks ",
        "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
}

const Options = forwardRef(({ ...others }, ref) => {
    return (
        <>
            <UnstyledButton
                ref={ref}
                sx={(theme) => ({
                    display: 'block',
                    width: '100px',
                    padding: '4px',
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    borderRadius: '48%',

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[8] : "black",
                        // backgroundRadius: theme.radius.sm,
                    },

                })}
                {...others}
            >
                <IconDotsVertical size="1rem" color='white' />

            </UnstyledButton >
        </>
    );
});


const Class = ({ classInfo, user }) => {
    const { classes, cx, theme } = useStyles();
    // const linkProps = { href: data.link };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        navigate('/class/1');
    }

    // console.log(classInfo);

    return (

        <Card withBorder radius="md" className={classes.card}>
            <Card.Section sx={{ display: "flex", flexDirection: 'column' }} >
                {/* <a {...linkProps}> */}
                <Image src={data.image} height={110} w={'300px'} />
                {/* </a> */}
                <Menu shadow="md" width={100} sx={classes.options}>
                    <Menu.Target>
                        <Options />
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item>
                            Edit
                        </Menu.Item>
                        <Menu.Item>
                            Unenroll
                        </Menu.Item>
                        <Menu.Item>
                            Archive
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>

                <Group className={classes.title}>
                    <Link to={`/class/${classInfo._id}/stream`} className={classes.link}>
                        <Text fw={500} fz={"20px"} color='white' truncate >
                            {classInfo.className}
                        </Text>
                    </Link>
                    {/* </Link> */}
                    <Text fz={"14px"} color="white" w={'180px'} truncate>
                        {classInfo.section}
                    </Text>
                    <Text fz={"14px"} inline color='white' w={'180px'} truncate>
                        {classInfo.classOwner.name}
                    </Text>
                </Group>

                <Group position="apart" className={classes.footer}>
                    <Avatar src={data.author.image} size={85} radius={50} />
                </Group>
            </Card.Section >

            <Card.Section>
                <Space h={140} />
            </Card.Section>
            <Card.Section h={'45px'} sx={{ display: "flex", borderTop: '2px solid #dadce0', padding: '0px 0 0px 0', alignItems: 'center', minWidth: '250px', justifyContent: 'flex-end' }}>
                <Flex className={classes.action} h={'45px'} w={'45px'} >
                    <IconFolder size="25px" />
                </Flex>
                <Flex className={classes.action} h={'45px'} w={'45px'}>
                    <IconPresentation size="25px" />
                </Flex>
            </Card.Section>
        </Card >


    );
}

export default Class;