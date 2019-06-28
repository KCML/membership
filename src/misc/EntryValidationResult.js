import _ from 'lodash';

export default function validateInputValues (values) {
    let errors = {};
    if (_.isEmpty(values.email)) {
        errors.email = "email is required";
    }
    if (_.isEmpty(values.password)) {
        errors.password = "password can't be empty";
    }
    if (_.isEmpty(values.password1)) {
        errors.password1 = "password is required";
    }
    if (_.isEmpty(values.password2)) {
        errors.password2 = "please confirm your password";
    }
    if (!(values.password2 === values.password1)) {
        errors.password2 = "password doesn't match";
    }
    if (_.isEmpty(values.lastname)) {
        errors.lastname = "Last name can't be empty";
    }
    if (_.isEmpty(values.firstname)) {
        errors.firstname = "First name can't be empty";
    }
    //console.log(errors);
    return errors;
};