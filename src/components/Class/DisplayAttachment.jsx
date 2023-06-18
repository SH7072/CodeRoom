import { ActionIcon, Flex, Image, Text, UnstyledButton, createStyles, rem } from "@mantine/core";
import { IconFile, IconFileMusic, IconFileSpreadsheet, IconFileText, IconFileZip, IconPdf, IconPhoto, IconPresentation, IconTxt, IconVideo, IconX } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    actionIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        marginRight: theme.spacing.md,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // width: '100%',
        // width: '48%',
        width: '280px',
        transition: 'background-color 150ms ease, border-color 150ms ease',
        border: `${rem(1)} solid ${theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[3]
            }`,
        borderRadius: theme.radius.md,
        // padding: theme.spacing.sm,   
        backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.white,
    },
    fileInfoDisplay: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        borderLeft: '2px solid #e9ecef',
        margin: '1rem 0 1rem 0',
        paddingLeft: '1rem',
    }
}));

const image = "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80";



const DisplayAttachment = ({ file }) => {
    const { classes } = useStyles();

    const fileIcon = (() => {
        switch (file.type && file.type.split('/')[1]) {
            case 'pdf':
                return <IconPdf size="2rem" />;
            case 'zip':
                return <IconFileZip size="2rem" />;
            case 'msword':
                return <IconFileText size="2rem" />;
            case 'vnd.openxmlformats-officedocument.wordprocessingml.document':
                return <IconFileText size="2rem" />;
            case 'vnd.ms-excel':
                return <IconFileSpreadsheet size="2rem" />;
            case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                return <IconFileSpreadsheet size="2rem" />;
            case 'vnd.ms-powerpoint':
                return <IconPresentation size="2rem" />;
            case 'vnd.openxmlformats-officedocument.presentationml.presentation':
                return <IconPresentation size="2rem" />;
            case 'plain':
                return <IconTxt size="2rem" />;
            case 'vnd.oasis.opendocument.text':
                return <IconTxt size="2rem" />;
            case 'vnd.oasis.opendocument.spreadsheet':
                return <IconFileSpreadsheet size="2rem" />;
            case 'vnd.oasis.opendocument.presentation':
                return <IconPresentation size="2rem" />;
            case 'jpeg':
                return <IconPhoto size="2rem" />;
            case 'png':
                return <IconPhoto size="2rem" />;
            case 'gif':
                return <IconPhoto size="2rem" />;
            case 'mp4':
                return <IconVideo size="2rem" />;
            case 'mp3':
                return <IconFileMusic size="2rem" />;
            default:
                return <IconFile size="2rem" />;
        }
    })();

    const handleClick = () => {
        window.open(file.url, '_blank', 'rel=noopener noreferrer')
    }


    return (
        <>
            <UnstyledButton
                className={classes.button}
                onClick={handleClick}
            >
                <Flex w={'5rem'} h={'100%'} justify={'center'} align={'center'}>
                    {fileIcon}
                </Flex>
                <Flex sx={classes.fileInfoDisplay}>
                    <Text weight={500} size="xs" sx={{ lineHeight: 1 }} mb={5}>
                        {file.public_id.split('-')[1]}
                    </Text>
                    <Text color="dimmed" size="sm" sx={{ lineHeight: 1 }}>
                        {file.type ? file.type.split('/')[1] : 'file'}
                    </Text>
                </Flex>
            </UnstyledButton >
        </>
    );
}

export default DisplayAttachment;