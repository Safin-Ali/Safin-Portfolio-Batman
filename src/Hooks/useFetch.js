import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (path=null) => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        axios.get(path)
        .then(result => setData(result.data))
        .catch(err => console.log(err.message));
    },[])
    return data;
};

export default useFetch;