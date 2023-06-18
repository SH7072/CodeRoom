import AccordionCard from './ClassworkComponents/AccordionCard'
import CreateToggleButton from './ClassworkComponents/CreateToggleButton'
import React, { useEffect, useState } from 'react'
import { createStyles, Button, Flex, Menu } from "@mantine/core";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadClass } from '../../../redux/actions/class';
import { loadClassWork } from '../../../redux/actions/classWork';


const useStyles = createStyles((themes) => ({
    main_container: {
        backgroundColor: 'white',
        padding: '2rem',
        width: '50%',
        marginLeft: '25%',
        marginBottom: '25%',

    },
}));



const Classwork = () => {

    const { classes, theme } = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log("Stream");
        dispatch(loadClass(params.id));
        dispatch(loadClassWork(params.id));
    }, [dispatch, params.id]);


    const loading = useSelector((state) => { return state.classes.loading });
    const classWork = useSelector((state) => { return state.classWork.classWork });
    const role = useSelector((state) => { return state.classes.role });
    const classWorkLoading = useSelector((state) => { return state.classWork.loading });

    // console.log(classWork);

    return (
        <>
            {
                !loading && (
                    <div className={classes.main_container}>
                        {role && role === 'teacher' && <CreateToggleButton></CreateToggleButton>}
                        <br />
                        {!classWorkLoading && classWork.length > 0 &&
                            classWork.map((item, index) => {
                                return <AccordionCard classWork={item} key={index}></AccordionCard>
                            }
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default Classwork;