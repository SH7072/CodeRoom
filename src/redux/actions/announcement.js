export const createAnnouncement = (classId, instructions, files, assignedTo) => async (dispatch) => {
    try {
        dispatch({ type: 'createAnnouncementRequest' });

        const formData = new FormData();
        formData.append('classId', classId);
        formData.append('description', instructions);
        formData.append('assignedTo', assignedTo);
        // for (let i = 0; i < files.length; i++) {
        //     formData.append('files', files[i]);
        // }
        formData.append('file', files[0]);

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/announcement/createAnnouncement`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });

        const status = res.status;
        const data = await res.json();

        console.log(data, "data");

        if (status !== 200) {
            dispatch({
                type: 'createAnnouncementFail',
                payload: data.error
            });
        }
        if (status === 200) {
            dispatch({
                type: 'createAnnouncementSuccess',
                payload: data.announcement
            });
        }
    }
    catch (error) {
        dispatch({
            type: 'createAnnouncementFail',
            payload: error.message
        });
    }
}


export const loadAnnouncements = (classId) => async dispatch => {
    try {
        dispatch({ type: 'loadAnnouncementsRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/announcement/getAnnouncements/${classId}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
        });

        const status = res.status;
        const data = await res.json();

        console.log(data, "data");

        if (status !== 200) {
            dispatch({
                type: 'loadAnnouncementsFail',
                payload: data.error
            });
        }
        if (status === 200) {
            dispatch({
                type: 'loadAnnouncementsSuccess',
                payload: data.announcement
            });
        }

    }
    catch (error) {
        dispatch({
            type: 'loadAnnouncementsFail',
            payload: error.message
        });
    }
}