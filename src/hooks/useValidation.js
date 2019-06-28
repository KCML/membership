import {useState,useEffect} from 'react';

const useValidation = (callback,validateInputValues) => {
    const [values,setValues] = useState({});
    const [errors,setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect((callback,hasSubmitted) => {
        (() => {
            console.log(values);
            console.log(errors);
            if(Object.keys(errors).length === 0 && hasSubmitted) {
                console.log("useEffect()");
                callback();
            }
        })();
    },[errors]);

    const handleChange = event => {
        event.persist();
        setValues(values => ({...values, [event.target.name]:event.target.value}));
    };

    const handleEntry = event => {
        console.log(event);
        if (event) {
            event.preventDefault();
        }
        setErrors(validateInputValues(values));
        setHasSubmitted(true);
    }
    
    return {
        handleChange,
        handleEntry,
        hasSubmitted,
        values,
        errors
    };
};

export default useValidation;