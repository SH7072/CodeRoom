import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
// import { Article } from '@tabler-icons-react';
import { IconArticleFilledFilled, IconDotsVertical,IconArticle,IconHelpHexagon,IconNotes   } from '@tabler/icons-react';
import { Accordion, useMantineTheme, rem, createStyles, Flex, Image, Menu, Button } from '@mantine/core';





// const theme = useMantineTheme();
// const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

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
const AccordionCard = () => {

    const { classes } = useStyles();
    return (

        <div className={classes.accordion_card_container} >
            

            <Accordion variant="contained"
            chevron={<IconArticleFilledFilled size={0 } />}>

                <Accordion.Item value="Assignments">
                    <Accordion.Control icon={<IconArticleFilledFilled size={40}  />}>

                        <Flex className={classes.accordion_section}>
                            <Flex className={classes.assignment_heading}>
                                <p>Assignment 1</p>
                            </Flex >
                            <Flex className={classes.due_date}>
                                <p>Due Date 5 May</p>

                            </Flex>
                            <Flex className={classes.three_dot_icon}>
                                <Menu position="right" offset={6} withArrow>
                                    <Menu.Target>
                                        <Button radius={"50%"} style={{ backgroundColor: "white" }}> <IconDotsVertical color={"black"} size={"1rem"}></IconDotsVertical ></Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>Edit</Menu.Item>
                                        <Menu.Item>Delete</Menu.Item>
                                        <Menu.Item>Copy Link</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Accordion.Control>

                    <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="AssignmentsNoDueDate">
                    <Accordion.Control icon={<IconArticle size={40}  />}>

                        <Flex className={classes.accordion_section}>
                            <Flex className={classes.assignment_heading}>
                                <p>Assignment 3</p>
                            </Flex>
                            <Flex className={classes.due_date}>
                                <p>No Due Date</p>

                            </Flex>
                            <Flex className={classes.three_dot_icon}>
                                <Menu position="right" offset={6} withArrow>
                                    <Menu.Target>
                                        <Button radius={"50%"} style={{ backgroundColor: "white" }}> <IconDotsVertical color={"black"} size={"1rem"}></IconDotsVertical ></Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>Edit</Menu.Item>
                                        <Menu.Item>Delete</Menu.Item>
                                        <Menu.Item>Copy Link</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Accordion.Control>

                    <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>


                <Accordion.Item value="StudyMaterial">
                    <Accordion.Control icon={<IconNotes size={40}  />}>

                        <Flex className={classes.accordion_section}>
                            <Flex className={classes.assignment_heading}>
                                <p>Notes</p>
                            </Flex>
                            <Flex className={classes.due_date}>
                                <p>Posted on 5 May</p>

                            </Flex>
                            <Flex className={classes.three_dot_icon} flexDirection='column' >
                                <Menu position="right" offset={6} withArrow>
                                    <Menu.Target>
                                        <Button radius={"50%"} style={{ backgroundColor: "white" }}> <IconDotsVertical color={"black"} size={"1rem"}></IconDotsVertical ></Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item>Edit</Menu.Item>
                                        <Menu.Item>Delete</Menu.Item>
                                        <Menu.Item>Copy Link</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Accordion.Control>

                    <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
            
            </Accordion>

        </div>
    )
}

export default AccordionCard;