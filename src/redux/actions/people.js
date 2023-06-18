export const loadPeople = (classId) => async dispatch => {
    try {
        dispatch({ type: 'loadPeopleRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/getPeople/${classId}`, {
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
                type: 'loadPeopleFail',
                payload: data.error
            });
        }
        if (status === 200) {
            dispatch({
                type: 'loadPeopleSuccess',
                payload: data
            });
        }

    }
    catch (error) {
        dispatch({
            type: 'loadPeopleFail',
            payload: error.message
        });
    }
}