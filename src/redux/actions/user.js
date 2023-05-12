const myvar = process.env.REACT_APP_BACKEND_URL;
console.log(myvar, "REACT_APP_BACKEND_URL");

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const res = await fetch(`http://localhost:4000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (data.error) {
            return dispatch({
                type: 'loginFail',
                payload: data.error
            });
        }
        if (data.status === 200) {
            dispatch({
                type: 'loginSuccess',
                payload: data
            });
        }
    } catch (error) {
        dispatch({
            type: 'loginFail',
            payload: error.message
        });
    }
}

export const register = (name, email, password) => async dispatch => {
    try {
        dispatch({ type: 'registerRequest' });

        console.log(name, email, password, "name, email, password");

        const res = await fetch(`http://localhost:4000/api/auth/register`, {
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
        if (data.status === 200) {
            dispatch({
                type: 'registerSuccess',
                payload: data
            });
        }
    } catch (error) {

        console.log(error, "error");

        dispatch({
            type: 'registerFail',
            payload: error.message
        });
    }
}
