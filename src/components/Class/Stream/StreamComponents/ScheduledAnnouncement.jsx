import React from "react";
import { createStyles, Button, Flex, Accordion } from "@mantine/core";
import SavedAnnouncementcard from "./SavedAnnouncementcard";
const useStyles = createStyles((theme) => ({
    accordion_container: {
        marginTop: "1rem",
        borderRadius: "8px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",

    },

}))
const ScheduleAnnouncement = () => {
    const { classes, theme } = useStyles();
    return <>
        <Accordion className={classes.accordion_container}>
            <Accordion.Item value="customization">
                <Accordion.Control style={{ color: "green" }}>Saved Announcement (2)</Accordion.Control>
                <SavedAnnouncementcard></SavedAnnouncementcard>
                <SavedAnnouncementcard></SavedAnnouncementcard>

            </Accordion.Item>
        </Accordion>
    </>
}
export default ScheduleAnnouncement;