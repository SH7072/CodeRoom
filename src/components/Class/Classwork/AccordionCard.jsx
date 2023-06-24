import { IconArticleFilledFilled, IconDotsVertical, IconArticle, IconHelpHexagon, IconNotes } from '@tabler/icons-react';
import { Accordion, useMantineTheme, rem, createStyles, Flex, Image, Menu, Button } from '@mantine/core';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { deleteClassWork } from '../../../redux/actions/classWork';


const useStyles = createStyles((themes) => ({
    accordion_card_container: {
        marginTop: "1rem",
        backgroundColor: "white",

        width: '100%',
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        borderRadius: "8px",
        border: "0px solid gray",

        alignItems: "center",
        flexDirection: "column",
    },

    accordion_section: {
        width: '100%',
        alignItems: "center",
        flexDirection: "row",
        // justifyContent: "space-between",
        // marginTop: "1rem",
    },
    assignment_heading: {
        width: '70%',
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",

    },
    due_date: {
        width: '25%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "right",

    },
    three_dot_icon: {

        justifyContent: "center",
        alignItems: "right",
        flexDirection: "column",

    },

}));

const formatDate = (date) => {
    // console.log(date);
    if (!date) return "No Due Date";
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`;
}


const AccordionCard = ({ classWork, openEditModal, role }) => {

    const { classes } = useStyles();
    const dispatch = useDispatch();

    const handleEdit = () => {
        openEditModal(classWork);
    }

    const handleDelete = () => {
        console.log("Delete");
        dispatch(deleteClassWork(classWork._id));
    }

    return (

        <div className={classes.accordion_card_container} >

            <Accordion variant="contained"
                chevron={<IconArticleFilledFilled size={0} />}>
                <Accordion.Item value="Assignments">
                    <Accordion.Control icon={<IconArticleFilledFilled size={40} />}>

                        <Flex className={classes.accordion_section}>
                            <Flex className={classes.assignment_heading}>
                                <p>{classWork.title}</p>
                            </Flex >
                            <Flex className={classes.due_date}>
                                <p>{formatDate(classWork.dueDate)}</p>

                            </Flex>
                            <Flex className={classes.three_dot_icon}>
                                <Menu position="right" offset={6} withArrow>
                                    <Menu.Target>
                                        <IconDotsVertical color={"black"} size={"1rem"}></IconDotsVertical >
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        {role == "teacher" && <Menu.Item onClick={handleEdit}>Edit</Menu.Item>}
                                        {role == "teacher" && <Menu.Item onClick={handleDelete}>Delete</Menu.Item>}
                                        <Menu.Item>Copy Link</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Accordion.Control>

                    {classWork.instructions && <Accordion.Panel> {parse(classWork.instructions)}</Accordion.Panel>}
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default AccordionCard;