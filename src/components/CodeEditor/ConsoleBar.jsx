import { Button, Flex, createStyles } from "@mantine/core";
import ConsoleButton from "./ConsoleButton";

const useStyles = createStyles(({ colorTheme }) => ({
    bar: {
        //dark theme bar 
        // backgroundColor: colorTheme === 'dark' ? '#282a2e' : '#fffff',
        backgroundColor: '#282a2e',
    },

}));

const ConsoleBar = ({ theme: colorTheme, monaco, ...props }) => {

    // console.log(colorTheme);
    const { classes } = useStyles(colorTheme);


    const handleRunCode = () => {
        alert(monaco.editor.getValue());
    }

    return (
        <>
            <Flex
                {...props}
                justify={'space-between'}
                p={' 0.5rem'}
                align={'center'}
                sx={classes.bar}>
                <ConsoleButton />
                <Button onClick={handleRunCode}>Run Code</Button>
            </Flex>
        </>
    );
}

export default ConsoleBar;