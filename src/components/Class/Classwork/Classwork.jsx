import AccordionCard from './ClassworkComponents/AccordionCard'
import CreateToggleButton from './ClassworkComponents/CreateToggleButton'
import React from 'react'
import { createStyles, Button, Flex, Menu } from "@mantine/core";


const useStyles = createStyles((themes) => ({
    main_container: {
        backgroundColor: 'white',
        padding: '2rem',
        width: '50%',
        marginLeft: '25%',
        marginBottom: '25%',

    },
}));



const Classwork = () => {

    const { classes, theme } = useStyles();

    return (
        <div className={classes.main_container}>
            <CreateToggleButton></CreateToggleButton>
            <br />
            <AccordionCard></AccordionCard>
        </div>
    )
}

export default Classwork;