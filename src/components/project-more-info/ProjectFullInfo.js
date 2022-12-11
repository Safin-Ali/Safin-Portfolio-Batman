import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectFullInfo = () => {

    const fetchDatas = useLoaderData();
    console.log(fetchDatas)

    return (
        <>
            <h1>Info</h1>
        </>
    );
};

export default ProjectFullInfo;