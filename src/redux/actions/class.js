
export const createClass = (className, section, subject, navigate) => async dispatch => {
    try {
        dispatch({ type: 'createClassRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/class/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ className, section, subject })
        });
        const status = res.status;
        const data = await res.json();

        console.log(data, "data");
        if (status !== 200) {
            dispatch({
                type: 'createClassFail',
                payload: data.error
            });
        }
        if (status === 200) {
            await dispatch({
                type: 'createClassSuccess',
                payload: data.class_
            });
            await dispatch({
                type: 'addClassesAsTeacher',
                payload: data.user
            });
            // localStorage.setItem('token', data.token);
            navigate(`/class/${data.class._id}/stream`);
        }
    } catch (error) {
        dispatch({
            type: 'createClassFail',
            payload: error.message
        });
    }
}

export const loadClass = (classId) => async dispatch => {
    try {
        dispatch({ type: 'loadClassRequest' });

        console.log(classId, "classId");

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/class/getClassInfo/${classId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        }

        );
        const status = res.status;
        const data = await res.json();

        console.log(data, "data");
        console.log(status, "status");

        if (status !== 200) {
            dispatch({
                type: 'loadClassFail',
                payload: data.error
            });
        }
        if (status === 200) {
            await dispatch({
                type: 'loadClassSuccess',
                payload: data.class
            });
        }
    } catch (error) {
        dispatch({
            type: 'loadClassFail',
            payload: error.message
        });
    }
}