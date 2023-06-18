import React from "react";
import { createStyles, Button, Flex, Avatar, TextInput, Menu } from "@mantine/core";
import { BsThreeDotsVertical, BsPeopleFill } from 'react-icons/bs';
import { TbArrowBigRight } from 'react-icons/tb';
import ClassComment from "./ClassComment";
import parse from 'html-react-parser';
import DisplayFile from "../../Classwork/ClassworkComponents/DisplayFile";
import DisplayAttachment from "../../DisplayAttachment";

const useStyles = createStyles((theme) => ({
    announced_card_container: {
        marginTop: "1rem",
        backgroundColor: "white",

        width: '100%',
        // boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        borderRadius: "8px",
        border: "2px solid rgb(218, 220, 224)",

        alignItems: "center",
        flexDirection: "column",
    },
    announced_section_1: {
        width: '100%',
        marginTop: "1rem",
    },
    profile_picture: {
        width: "10%",
        justifyContent: "center",
        alignItems: "center",
        height: "3rem",
    },
    profile_Description: {
        width: "85%",

        height: "3rem",
        flexDirection: "column",
        justifyContent: "center",
    },
    three_dot_icon: {
        justifyContent: "center",
        alignItems: "center",
    },
    announced_section_2: {
        width: "94%",
        padding: "2%",
        paddingLeft: "3%",
        paddingRight: "3%",
    },
    announced_section_3: {

        padding: "2%",
        width: "96%",
        borderTop: "1px solid #B2B2B2",


    },
    announced_section_4: {
        padding: "2%",
        width: "96%",
        borderTop: "1px solid #B2B2B2",
    },
    no_of_comments: {
        width: "98%",
        height: "2rem",
        // border: "1px solid black",
        alignItems: "center",
        paddingLeft: "2%"
    },
    writeComment_div1: {
        width: "8%",
        alignItems: "center",
        justifyContent: "center",

    },
    writeComment_div2: {
        width: "85%",

        alignItems: "center",
    },
    writeComment_div3: {
        width: "7%",

        alignItems: "center",
        justifyContent: "center",

    },
    displayContainer: {
        flexWrap: 'wrap',
        width: 'calc(100%-2rem)',
        padding: '1rem',
    }

}));


const formatDateTime = (date) => {
    //get the date and time in AM PM format
    let dateTime = new Date(date);
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;

    //get the date in dd/mm/yyyy format
    let day = dateTime.getDate();
    let month = dateTime.getMonth() + 1;
    let year = dateTime.getFullYear();
    let strDate = day + "/" + month + "/" + year;

    //return only date if not today
    if (dateTime.getDate() !== dateTime.getDate() || dateTime.getMonth() !== dateTime.getMonth() || dateTime.getFullYear() !== dateTime.getFullYear()) {
        return strDate;
    }

    //return only time if today
    let today = new Date();
    if (today.getDate() === dateTime.getDate() && today.getMonth() === dateTime.getMonth() && today.getFullYear() === dateTime.getFullYear()) {
        return strTime;
    }

}

const AnnouncedCard = ({ announcement }) => {

    console.log(announcement);

    const { classes, theme } = useStyles();

    return <>
        <Flex className={classes.announced_card_container}>
            <Flex className={classes.announced_section_1}>
                <Flex className={classes.profile_picture}><Avatar size={"2.5rem"}></Avatar></Flex>
                <Flex className={classes.profile_Description}>
                    <h4 style={{ margin: "0px", padding: "0px", color: "#434242", fontFamily: "sans-serif" }}>{announcement.announcementBy.name}</h4>
                    <h5 style={{ margin: "0px", padding: "0px", color: "gray" }}>{formatDateTime(announcement.announcementDate)}</h5>
                </Flex>
                <Flex className={classes.three_dot_icon}>
                    <Menu position="right" offset={6} withArrow>
                        <Menu.Target>
                            <Button radius={"50%"} style={{ backgroundColor: "white" }}> <BsThreeDotsVertical color={"black"} size={"1rem"}></BsThreeDotsVertical></Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item disabled>Move to top</Menu.Item>
                            <Menu.Item>Edit</Menu.Item>
                            <Menu.Item>Delete</Menu.Item>
                            <Menu.Item>Copy Link</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Flex>
            <div className={classes.announced_section_2}>
                <h5 style={{ margin: "0px", color: "black", fontFamily: "sans-serif", fontWeight: "lighter", fontSize: "0.9rem" }}>
                    {announcement.announcement && parse(announcement.announcement)}
                </h5>
            </div>
            <Flex gap={'1rem'} sx={classes.displayContainer}>
                {announcement.attachments && announcement.attachments.length > 0 && announcement.attachments.map((file, index) => {
                    return <DisplayAttachment file={file} key={index} />
                })}
            </Flex>
            <div className={classes.announced_section_3}>
                <Flex className={classes.no_of_comments}><BsPeopleFill size={"1.5rem"} color="gray" ></BsPeopleFill>
                    <h5 style={{ margin: "0rem", marginLeft: "0.7rem", color: "gray", fontFamily: "revert", fontWeight: "bolder", fontSize: "0.8rem" }}>2 class comments</h5>
                </Flex>
            </div>
            <Flex className={classes.announced_section_4}>
                <Flex className={classes.writeComment_div1}><Avatar size={"3rem"}></Avatar></Flex>
                <Flex className={classes.writeComment_div2}> <TextInput placeholder="Add Class Comment.." radius="5rem" style={{ width: "100%", }}></TextInput> </Flex>
                <Flex className={classes.writeComment_div3}><TbArrowBigRight size={"2rem"} color="gray"></TbArrowBigRight></Flex>

            </Flex>

        </Flex >

    </>
}

export default AnnouncedCard;