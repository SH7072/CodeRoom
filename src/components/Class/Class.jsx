import { IconBookmark, IconDotsVertical, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    createStyles,
    rem,
    Menu,
    UnstyledButton,
} from '@mantine/core';
import { forwardRef } from 'react';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        margin: '15px',
        width: '300px',
        height: '300px',
    },

    rating: {
        display: 'block',
        marginTop: theme.spacing.md,
        marginBottom: rem(5),
        position: 'absolute',
        top: theme.spacing.xs,
        right: rem(12),
        pointerEvents: 'none',
    },

    title: {
        display: 'block',
        marginTop: theme.spacing.md,
        marginBottom: rem(5),
        position: 'absolute',
        top: theme.spacing.xs,
        left: rem(12),
        pointerEvents: 'none',
    },

    description: {
        display: 'block',
        marginTop: theme.spacing.md,
        marginBottom: rem(5),
        position: 'absolute',
        top: theme.spacing.xs,
        left: rem(12),
        pointerEvents: 'none',
    },


    action: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),
    },

    footer: {
        marginTop: theme.spacing.md,
    },
}));

const data = {
    "image": "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "link": "https://mantine.dev/",
    "title": "Resident Evil Village review",
    "rating": "outstanding",
    "description": "A",
    "author": {
        "name": "Bill Wormeater",
        "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
}

const Options = forwardRef(({ ...others }: props, ref) => {
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
                <IconDotsVertical size="1rem" color='white' />

            </UnstyledButton >
        </>
    );
});


const Class = () => {
    const { classes, cx, theme } = useStyles();
    const linkProps = { href: data.link, target: '_blank', rel: 'noopener noreferrer' };

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <a {...linkProps}>
                    {/* <img src={data.image} height={120} zIndex={0} /> */}
                    <Image src={data.image} height={120} zIndex={0} />
                </a>
                {/* <Menu sx={classes.rating}>
                    <Menu.Target>
                        <Options />
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item>
                            Edit
                        </Menu.Item>
                        <Menu.Item>
                            Delete
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu> */}

            </Card.Section>

            <Text className={classes.title} fw={500} component="a" {...linkProps} color='white'>
                {data.title}
            </Text>
            <Text fz="sm" color="dimmed" lineClamp={4} className={classes.description}>
                {data.description}
            </Text>


            <Group position="apart" className={classes.footer}>
                <Center>
                    <Avatar src={data.author.image} size={24} radius="xl" mr="xs" />
                    <Text fz="sm" inline>
                        {data.author.name}
                    </Text>
                </Center>

                <Group spacing={8} mr={0}>
                    <ActionIcon className={classes.action}>
                        <IconHeart size="1rem" color={theme.colors.red[6]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconBookmark size="1rem" color={theme.colors.yellow[7]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconShare size="1rem" />
                    </ActionIcon>
                </Group>
            </Group>
        </Card >
    );
}

export default Class;