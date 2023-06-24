export const createAnnouncement = (classId, instructions, files, assignedTo) => async (dispatch) => {
    try {
        dispatch({ type: 'createAnnouncementRequest' });

        const formData = new FormData();
        formData.append('classId', classId);
        formData.append('description', instructions);
        formData.append('assignedTo', assignedTo);
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

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
        console.log(status);

        if (status !== 201) {
            dispatch({
                type: 'createAnnouncementFail',
                payload: data.error
            });
        }
        if (status === 201) {
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

export const editAnnouncement = ({ announcementId, classId, instructions, files, assignedTo }) => async (dispatch) => {
    try {
        dispatch({ type: 'editAnnouncementRequest' });

        const formData = new FormData();
        formData.append('announcementId', announcementId);
        formData.append('classId', classId);
        formData.append('description', instructions);
        formData.append('assignedTo', assignedTo);
        // formData.append('oldFiles', []);


        for (let i = 0; i < files.length; i++) {
            if (files[i].public_id) {
                formData.append("oldFiles", JSON.stringify(files[i]));
                console.log(files[i], 'oldFiles');
            }
            else {
                formData.append("files", files[i]);
                console.log(files[i], 'files');
            }
        }

        //print formdata    
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/announcement/editAnnouncement/${classId}/${announcementId}`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });

        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");
        // console.log(status);

        if (status !== 200) {
            dispatch({
                type: 'editAnnouncementFail',
                payload: data.error
            });
        }
        if (status === 200) {
            dispatch({
                type: 'editAnnouncementSuccess',
                payload: data.announcement
            });
        }
    }
    catch (error) {
        dispatch({
            type: 'editAnnouncementFail',
            payload: error.message
        });
    }
}


export const deleteAnnouncement = (announcementId, classId) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteAnnouncementRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/announcement/deleteAnnouncement/${classId}/${announcementId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
        });

        const status = res.status;
        const data = await res.json();

        console.log(data, "data");
        console.log(status);

        if (status !== 200) {
            dispatch({
                type: 'deleteAnnouncementFail',
                payload: data.error
            });
        }

        if (status === 200) {
            dispatch({
                type: 'deleteAnnouncementSuccess',
                payload: data.announcement
            });
        }
    }
    catch (error) { }
}

