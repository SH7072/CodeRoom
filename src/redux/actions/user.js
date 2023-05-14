const myvar = process.env.REACT_APP_BACKEND_URL;
console.log(myvar, "REACT_APP_BACKEND_URL");

const dob = new Date();

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const res = await fetch(`http://localhost:4000/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        console.log(data, "data");

        if (data.error) {
            dispatch({
                type: 'loginFail',
                payload: data.error
            });
        }
        if (data.status === 201) {
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

        const res = await fetch(`http://localhost:4000/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, dob })
        });

        const data = await res.json();

        if (data.error) {
            return dispatch({
                type: 'registerFail',
                payload: data.error
            });
        }
        if (data.status === 201) {
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
