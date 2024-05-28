export const validate = (data) => {
    const errors = {}
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/; // Asumiendo el formato YYYY-MM-DD
    const nDniRegex = /^\d{8}$/; 
    const passwordRegex = /^(?=.*[A-Z]).{6,}$/; // Al menos 6 caracteres y 1 mayúscula
    const usernameRegex = /^[a-zA-Z0-9_]{4,}$/; // Al menos 4 caracteres alfanuméricos o guion bajo

   

    if (!input.name) {
        errors.name = "Name is required";
    } else if (input.name.length <= 3) {
        errors.name = "Name must be longer than 3 characters";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "Name can only contain letters and spaces";
    }

    if (!input.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(input.email)) {
        errors.email = "Email is invalid";
    }

    if (!input.birthdate) {
        errors.birthdate = "Birthdate is required";
    } else if (!birthdateRegex.test(input.birthdate)) {
        errors.birthdate = "Birthdate is invalid. Use DD-MM-YYYY format";
    } else {
        const [day, month, year] = input.birthdate.split("-").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        // Check if birthdate is valid and not in the future
        if (birthDate > today) {
            errors.birthdate = "Birthdate cannot be in the future";
        } else if (age < 16 || (age === 16 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
            errors.birthdate = "You must be at least 16 years old";
        }
    }

    if (!input.nDni) {
        errors.nDni = "nDni is required";
    } else if (!nDniRegex.test(input.nDni)) {
        errors.nDni = "nDni must be 8 digits";
    }

    if (!input.password) {
        errors.password = "Password is required";
    } else if (!passwordRegex.test(input.password)) {
        errors.password = "Password must be at least 6 characters and contain at least one uppercase letter";
    }

    if (!input.username) {
        errors.username = "Username is required";
    } else if (!usernameRegex.test(input.username)) {
        errors.username = "Username must be at least 4 characters and contain only alphanumeric characters or underscores";
    }

    return errors
}