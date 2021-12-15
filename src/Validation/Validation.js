import React, { useState } from "react";

const Validation = () => {
    const [touched, setTouched] = useState({
        inputEmail: false,
        inputPassword: false
    });

    const handleBlur = (field) => (e) => {
        setTouched({...touched, [field]: true})
    };

    function Validate(inputEmail, inputPassword) {
        const errors = {
            inputEmail: '',
            inputPassword: ''
        }

        if (touched.inputPassword && inputPassword.length < 6 )
            errors.inputPassword = 'Password must be over 5 symbol';
        else if (touched.inputPassword && inputPassword.length > 8)
            errors.inputPassword = 'Password must be under 9 symbol';
        
        const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (touched.inputEmail && !reg.test(inputEmail))
            errors.inputEmail = 'Email Format is wrong';
        return errors
    }
    return {handleBlur, Validate}
}

export default Validation;