import React, { createContext } from 'react';
import useFetch from '../Hooks/useFetch';

export const HomePageData = createContext();

const DataContext = ({children}) => {

    // skill date
    const skillData =  useFetch(`skillData.json`)

    const homePageData = {skillData}
    return (
        <HomePageData.Provider value={homePageData}>
            {children}
        </HomePageData.Provider>
    );
};



export default DataContext;