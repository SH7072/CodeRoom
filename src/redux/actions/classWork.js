

export const createClassWork = (title, instructions, dueDate, points, topic, files, classRoom, assignedTo) => async dispatch => {
    try {
        dispatch({ type: 'createClassWorkRequest' });

        const formData = new FormData();

        formData.append("title", title);
        formData.append("type", "Assignment");
        formData.append("instructions", instructions);
        formData.append("dueDate", dueDate);
        formData.append("points", points);
        formData.append("topic", topic);
        formData.append("classId", classRoom);
        formData.append("assignedTo", assignedTo);

        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }


        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/classWork/createClassWork/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
        });

        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");
        // console.log(status);


        if (status !== 201) {
            dispatch({
                type: 'createClassWorkFail',
                payload: data.error
            });
        }
        if (status === 201) {
            dispatch({
                type: 'createClassWorkSuccess',
                payload: data.classWork
            });
        }

    }
    catch (error) {
        dispatch({
            type: 'createClassWorkFail',
            payload: error.message
        });
    }
}


export const loadClassWork = (classId) => async dispatch => {
    try {
        dispatch({ type: 'loadClassWorkRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/classWork/getClassWork/${classId}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            }
        });

        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");

        if (status !== 200) {
            dispatch({
                type: 'loadClassWorkFail',
                payload: data.error
            });
        }
        if (status === 200) {
            dispatch({
                type: 'loadClassWorkSuccess',
                payload: data.classWork
            });
        }

    }
    catch (error) {
        dispatch({
            type: 'loadClassWorkFail',
            payload: error.message
        })
    }
}



export const editClassWork = (title, instructions, dueDate, points, topic, files, classRoom, assignedTo, classWorkId) => async dispatch => {
    try {
        dispatch({ type: 'editClassWorkRequest' });

        const formData = new FormData();

        formData.append("title", title);
        formData.append("type", "Assignment");
        formData.append("instructions", instructions);
        formData.append("dueDate", dueDate);
        formData.append("points", points);
        formData.append("topic", topic);
        formData.append("classId", classRoom);
        formData.append("assignedTo", assignedTo);

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

        // console.log(files[0]);

        // for (var [key, value] of formData.entries()) {
        //     // console.log(key, value);
        //     if (key === "oldFiles") {
        //         console.log(value);
        //         // for (let i = 0; i < value.length; i++) {
        //         //     console.log(value[i]);
        //         // }
        //     }
        // }

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/classWork/updateClassWork/${classWorkId}`, {
            method: "PUT",
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
                type: 'editClassWorkFail',
                payload: data.error
            });
        }
        if (status === 200) {
            dispatch({
                type: 'editClassWorkSuccess',
                payload: data.classWork
            });
        }

    }
    catch (error) {
        dispatch({
            type: 'editClassWorkFail',
            payload: error.message
        });
    }
}


export const deleteClassWork = (classWorkId) => async dispatch => {
    try {
        dispatch({ type: 'deleteClassWorkRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/classWork/deleteClassWork/${classWorkId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
        });

        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");
        // console.log(status);

        if (status !== 200) {
            dispatch({
                type: 'deleteClassWorkFail',
                payload: data.error
            });
        }

        if (status === 200) {
            dispatch({
                type: 'deleteClassWorkSuccess',
                payload: data.classWork
            });
        }
    }
    catch (error) {
        dispatch({
            type: 'deleteClassWorkFail',
            payload: error.message
        });
    }
}