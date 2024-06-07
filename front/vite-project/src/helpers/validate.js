export const validar = (input) => {
    const errors = {}
    // Username validation
    if (!input.username || input.username.length <= 3) {
        errors.username = "Username must be more than 3 characters";
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!input.password || !passwordRegex.test(input.password)) {
        errors.password = "Password must be at least 8 characters, contain one uppercase letter and one number";
    }

    return errors
}