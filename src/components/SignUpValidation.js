function SignUpValidation(values){

    alert("");
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.userName === "") {
        errors.userName = "Username is required";
    }

    if (values.email === "") {
        errors.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if (values.password === "") {
        errors.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters";
    }

    if (values.verifyPassword === "") {
        errors.verifyPassword = "Verify Password is required";
    } else if (!password_pattern.test(values.verifyPassword)) {
        errors.verifyPassword = "Verify Password must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters";
    } else if (values.password != values.verifyPassword){
        errors.verifyPassword = "Passwords don't match"
    }

    return errors;
}
export default SignUpValidation;