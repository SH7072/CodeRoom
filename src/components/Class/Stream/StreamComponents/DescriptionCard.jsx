import React from "react";
import { useState } from "react";
import { createStyles, Button, Modal, ColorSwatch, useMantineTheme, Group } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { FaPen, FaCheck } from 'react-icons/fa';

const useStyles = createStyles((theme) => ({

    // Description Card
    description_container: {
        backgroundColor: '#3EC70B',
        width: "100%",
        // marginLeft: "10%",
        marginBottom: "1rem",
        height: "15rem",
        borderRadius: "8px",
    },

    customize_button: {
        position: 'relative',
        left: "84%",
        top: "5%",
        color: "green",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "white",
            opacity: "0.8",
        }
    },

    faPen_style: {
        marginRight: "10px",
        color: "green",
    },
    classroom_name: {
        backgroundColor: "",
        position: "relative",
        top: "40%",
        fontSize: "2rem",
        padding: "1rem",
        marginLeft: '1rem',
        fontWeight: "bold",
        fontFamily: "Lucida Console, Sans-serif",
        color: "white",
        textTransform: "uppercase",
    },

    Modal_customize_container: {
        marginLeft: "-3.4%",

    },
    Modal_description_container: {
        width: "95%",
        backgroundColor: '#3EC70B',
        height: "15rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        marginLeft: "2.5%"
    },


}));

const DescrioptionCard = () => {

    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [checked, setChecked] = useState(true);

    const swatches = Object.keys(theme.colors).map((color) => (
        <ColorSwatch component="button" size={"3rem"} key={color} color={theme.colors[color][6]} onClick={() => setChecked((c) => !c)}
            style={{ color: '#fff', cursor: 'pointer', marginBottom: '1rem' }} >{checked && < FaCheck />}</ColorSwatch>
    ));

    return <>
        <div className={classes.description_container}>
            <Button className={classes.customize_button} onClick={open}>
                <FaPen className={classes.faPen_style} />
                Customize
            </Button>
            <p className={classes.classroom_name}> Mathematics</p>
        </div>
        <Modal opened={opened} onClose={close} size={"50%"} title={"customize appearance"} centered withCloseButton={false} className={classes.Modal_customize_container}>
            <div className={classes.Modal_description_container}  ></div>
            <Modal.Title style={{ margin: "1rem" }}>Select Theme Color</Modal.Title>
            <Group position="center" spacing="xs">
                {swatches}
            </Group>
        </Modal>
    </>
}
export default DescrioptionCard;