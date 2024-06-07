import axios from "axios"
import { useState, useRef } from "react"
import style from "./Register.module.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const Register = () => {
    const formRegisterRef = useRef(); // Forma de evitar useState para el form, genera referencia
    const navigate = useNavigate()
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        birthdate: "",
        nDni: "",
        username: "",
    });

    const validateForm = (user) => {
        const errors = {};
        if (!user.name || user.name.length <= 3) {
            errors.name = "Name must be more than 3 characters.";
        }

        // Username validation
        if (!user.username || user.username.length <= 3) {
            errors.username = "Username must be more than 3 characters.";

        }

        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{7,}$/;
        if (!user.password || !passwordRegex.test(user.password)) {
            errors.password = "Password must be at least 7 characters long and contain at least one uppercase letter and one number.";

        }

        // Birthdate validation
        const currentDate = new Date();
        const birthdate = new Date(user.birthdate);
        const age = currentDate.getFullYear() - birthdate.getFullYear();
        const ageMonth = currentDate.getMonth() - birthdate.getMonth();
        const ageDay = currentDate.getDate() - birthdate.getDate();
        if (age < 16 || age > 100 || (age === 16 && ageMonth < 0) || (age === 100 && ageMonth > 0) || (age === 16 && ageMonth === 0 && ageDay < 0)) {
            errors.birthdate = "Birthdate is invalid. Age must be between 16 and 100 years.";

        }

        // nDni validation
        const dniRegex = /^\d{8}$/;
        if (!user.nDni || !dniRegex.test(user.nDni)) {
            errors.nDni = "nDni must be 8 digits.";

        }

        // All fields are required
        for (const field in user) {
            if (!user[field]) {
                errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;

            }
        }
        return errors

    }

    const handleRegister = async (e) => {
        e.preventDefault() // Prevengo que se reinicie, necesito primero verificar los datos
        
        const formData = new FormData(formRegisterRef.current) // Agarra un formulario HTML y lo transforma en objeto iterator
        const userData = Object.fromEntries(formData) // Transforma un objeto iterator en simple, el que se envía al backend

        const validationErrors = validateForm(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const result = await axios.post("http://localhost:3000/users/register", userData);
                console.log(`Usuario creado correctamente con el id ${result.data.id}`)
                toast.success("Registered successfully! Redirecting to login...")
                setTimeout(()=>{
                    e.target.reset();
                    navigate("/login")
                }, 2000)
            } catch (e) {
                console.error(e?.response?.data?.detail);
            }
        }

        //1:01 28/05

    }

    //implementar handler en el formulario siemore
    return (
        <div className= {style.registerContainer}>
            <h2>User Register</h2>
            <form ref={formRegisterRef} onSubmit={handleRegister}> 
                <div>
                    <label>Name: </label>
                    <input  type="text" name= "name" placeholder="Ricardo Rojas"/>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                
                <div>
                    <label>Username: </label>
                    <input type="text"  name= "username"  placeholder="Ricardo"/>
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div>
                    <label>Email: </label>
                    <input type="email" name= "email"  placeholder="ricardo@gmail.com"/>
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password"  name= "password"  placeholder="Pint@st66" />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                 </div>
                
                <div>
                    <label>Birthdate: </label>
                    <input type="date"  name= "birthdate"  placeholder="01-1-2001" />
                    {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
                </div>
                <div>
                    <label>nDni: </label>
                    <input  type="number"  name= "nDni" placeholder="45678900" />
                    {errors.nDni && <p style={{ color: 'red' }}>{errors.nDni}</p>}

                </div>
                <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default Register