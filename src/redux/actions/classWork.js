

export const createClassWork = (title, instructions, dueDate, points, topic, files, classRoom, assignedTo) => async dispatch => {
    try {
        dispatch({ type: 'createClassWorkRequest' });

        console.log(title, instructions, dueDate, points, topic, files, classRoom, assignedTo);

        const formData = new FormData();

        formData.append("title", title);
        formData.append("type", "Assignment");
        formData.append("instructions", instructions);
        formData.append("dueDate", dueDate);
        formData.append("points", points);
        formData.append("topic", topic);
        formData.append("classId", classRoom);
        formData.append("assignedTo", assignedTo);
        formData.append("file", files[0]);

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/classWork/createClassWork/`, {
            method: "POST",
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
                type: 'createClassWorkFail',
                payload: data.error
            });
        }
        if (status === 200) {
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



