import { Flex, Select, createStyles } from "@mantine/core";

const useStyles = createStyles(({ colorTheme }) => ({
    bar: {
        //dark theme bar 
        // backgroundColor: colorTheme === 'dark' ? '#282a2e' : '#fffff',
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: '#1e1e1e',
        borderBottom: '2px solid #282a2e'
    },

}));

const TopSideOptionsbar = ({ colorTheme, monaco, language, setLanguage, ...props }) => {

    const { classes } = useStyles(colorTheme);

    const handleLanguageChange = (lan) => {
        setLanguage(lan);
        monaco.editor.setModelLanguage(monaco.editor.getModel(), lan);
        // console.log(editorRef?.current?.getModel().getLanguageId());
    }

    return (
        <>
            <Flex
                {...props}
                justify={'space-between'}
                p={'0 0.5rem 0.5rem 0.5rem'}
                align={'center'}
                sx={classes.bar}
                h={'30px'}
            >

                <Select
                    styles={(theme) => ({
                        root: {
                            border: 'none',
                            outline: 'none',
                            width: 'fit-content',
                            padding: '0',
                            //on select remove border
                            '&:focus': {
                                outline: 'none',
                                border: 'none',
                            },

                            backgroundColor: theme.colorScheme === 'dark' ? '#1e1e1e' : '#fffff',
                        },
                        wrapper: {
                            border: 'none',
                            outline: 'none',
                            width: 'fit-content',
                            padding: '0',
                        },
                        input: {
                            border: 'none',
                            outline: 'none',
                            // fontSize: '0.8rem',
                            fontWeight: 'bold',
                            padding: '0',
                            width: 'fit-content',

                            //on select remove border
                            '&:focus': {
                                outline: 'none',
                                border: 'none',
                            },
                            backgroundColor: theme.colorScheme === 'dark' ? '#1e1e1e' : '#fffff',
                        },
                        item: {
                            // applies styles to selected item
                            '&[data-selected]': {
                                '&, &:hover': {
                                    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
                                    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
                                },
                            },
                            // applies styles to hovered item (with mouse or keyboard)
                            '&[data-hovered]': {},
                        },
                        dropdown: {
                            backgroundColor: theme.colorScheme === 'dark' ? '#1e1e1e' : '#fffff',
                            border: 'none',
                            outline: 'none',

                        }
                    })}
                    // h={'5px'}
                    // size="sm"

                    defaultValue={language}
                    onChange={(e) => { handleLanguageChange(e) }}
                    data={
                        [
                            { value: 'cpp', label: 'C++' },
                            { value: 'python', label: 'Python' },
                            { value: 'javascript', label: 'Javascript' },
                            { value: 'HTML', label: 'HTML' },
                        ]}
                />

            </Flex>
        </>
    );
}

export default TopSideOptionsbar;