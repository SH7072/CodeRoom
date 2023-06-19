

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


