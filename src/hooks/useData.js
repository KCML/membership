import {useState,useEffect} from 'react';
import axios from 'axios';

const useData = (nosql) => {
    const [data,setData] = useState([]);
    useEffect(()=> {
        (async nosql => {
            await axios.post("http://localhost:5000/management",nosql)
            .then(res => {
                //console.log(res.data);
                setData(res.data);
            })
            .catch(err => console.log(err));
        })(nosql);
    },[nosql]);
    return(data);
}

export default useData;