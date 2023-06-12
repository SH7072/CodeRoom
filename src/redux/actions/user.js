const dob = new Date();

export const login = (email, password, navigate) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const status = res.status;
        const data = await res.json();

        // console.log(data, "data");
        // console.log(status, "status");
        // console.log(status.OK, "status.OK");
        // console.log('wjkdbwjdbj');

        if (status !== 200) {
            dispatch({
                type: 'loginFail',
                payload: data.message
            });
        }
        if (status === 200) {
            dispatch({
                type: 'loginSuccess',
                payload: data
            });
            localStorage.setItem('token', data.token);
            navigate('/classroom');
        }
    } catch (error) {
        console.log(error, "error");
        dispatch({
            type: 'loginFail',
            payload: error.message
        });
    }
}

export const register = (name, email, password, navigate) => async dispatch => {
    try {
        dispatch({ type: 'registerRequest' });

        console.log(name, email, password, "name, email, password");

        const res = await fetch(`http://localhost:4000/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (data.error) {
            return dispatch({
                type: 'registerFail',
                payload: data.error
            });
        }
        if (res.status === 200) {
            dispatch({
                type: 'registerSuccess',
                payload: data
            });
            navigate('/login');
        }
    } catch (error) {

        // console.log(error, "error");

        dispatch({
            type: 'registerFail',
            payload: error.message
        });
    }
}


export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: 'loadUserRequest' });

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/getUserInfo`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });

        const data = await res.json();
        // console.log(data, 'from loadUser');

        if (res.status !== 200) {
            return dispatch({
                type: 'loadUserFail', payload: data.error
            });
        }

        if (res.status === 200)
            return dispatch({
                type: 'loadUserSuccess', payload: data.user
            });
    } catch (error) {
        dispatch({ type: 'loadUserFail', payload: error });
    }
};


export const logout = (navigate) => async dispatch => {
    try {
        dispatch({ type: 'logoutRequest' });

        localStorage.removeItem('token');

        dispatch({ type: 'logoutSuccess' });
        navigate('/login');
    }
    catch (error) {
        dispatch({ type: 'logoutFail', payload: error });
    }
}