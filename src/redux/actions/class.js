
export const joinClass = (classCode, navigate) => async dispatch => {
    try {
        dispatch({ type: 'joinClassRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/class/join`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ classCode })
        });
        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");
        if (status !== 200) {
            dispatch({
                type: 'joinClassFail',
                payload: data.error
            });
        }
        if (status === 200) {
            await dispatch({
                type: 'joinClassSuccess',
                payload: data.class
            });
            await dispatch({
                type: 'addClassesAsStudent',
                payload: data.user
            });
            // await dispatch(loadUser());
            // localStorage.setItem('token', data.token);
            navigate(`/class/${data.class._id}/stream`);
        }
    } catch (error) {
        dispatch({
            type: 'joinClassFail',
            payload: error.message
        });
    }
}






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

        // console.log(data, "data");
        if (status !== 200) {
            dispatch({
                type: 'createClassFail',
                payload: data.error
            });
        }
        if (status === 200) {
            await dispatch({
                type: 'createClassSuccess',
                payload: data.class
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

export const getAllClassRooms = () => async dispatch => {
    try {
        dispatch({ type: 'getAllClassRoomsRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/class/getAllClassRooms`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        }

        );
        const status = res.status;
        const data = await res.json();

        if (status !== 200) {
            dispatch({
                type: 'getAllClassRoomsFail',
                payload: data.error
            });
        }
        if (status === 200) {
            await dispatch({
                type: 'getAllClassRoomsSuccess',
                payload: data.classRooms
            });
        }
    } catch (error) {
        dispatch({
            type: 'getAllClassRoomsFail',
            payload: error.message
        });
    }
}

export const loadClass = (classId) => async dispatch => {
    try {
        dispatch({ type: 'loadClassRequest' });

        // console.log(classId, "classId");

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/class/getClassInfo/${classId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        }

        );
        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");
        // console.log(status, "status");

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