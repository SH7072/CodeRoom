import React from 'react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <p>home</p>
            <Link to="/login"> testing mantine</Link>
            <br />
            <Link to="/signup"> testing mantine</Link>
        </>

    )
}
export default Home;