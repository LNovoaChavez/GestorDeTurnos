import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { validate } from "../../helpers/validate"

const Register = () => {
    const formRef = useRef(); // Forma de evitar useState para el form, genera referencia

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        birthdate: "",
        nDni: "",
        username: "",
    });

    const handleRegister = async (event) => {
        event.preventDefault(); // Prevengo que se reinicie, necesito primero verificar los datos

        const formData = new FormData(formRef.current); // Agarra un formulario HTML y lo transforma en objeto iterator
        const userData = Object.fromEntries(formData.entries()); // Transforma un objeto iterator en simple, el que se envía al backend

        const validationErrors = validate(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const result = await axios.post("http://localhost:3000/users/register", userData);
                console.log(result);
                event.target.reset();
            } catch (e) {
                console.error(e?.response?.data?.detail);
            }
        }
    };


    
    return (
        <div>
            <h2>User Register</h2>
            <form ref={formRef} onSubmit={handleRegister}>
                <div>
                    <label>Name: </label>
                    <input
                    type="text"
        
                    name= "name"
                    placeholder="Ricardo Rojas"
                    autoComplete="name"
                    
                 />
                 {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                 </div>
                 <div>
                    <label>Email: </label>
                    <input
                    type="text"
                    name= "email"
                    placeholder="ricardo@gmail.com"
                    autoComplete="email"
                    
                 />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div>
                    <label>Password: </label>
                    <input
                    type="password"
                    name= "Password"
                    placeholder="Luzdiamond"
                    autoComplete="new-password"// Añadir este atributo
                    
                 />
                 {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                 </div>
                
                <div>
                    <label>Birthdate: </label>
                    <input
                    type="date"
                    name= "birthdate"
                    placeholder="01-1-2001"
                    autoComplete="bday"
                 />
                 {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
                 </div>
                 <div>
                    <label>nDni: </label>
                    <input
                    type="number"
                    name= "nDni"
                    placeholder="45678900"
                    autoComplete="off"
                 />
                 {errors.nDni && <p style={{ color: 'red' }}>{errors.nDni}</p>}
                 </div>
                 <div>
                    <label>Username: </label>
                    <input
                    type="text"
                    name= "username"
                    placeholder="Ricardo Rojas"
                    autoComplete="username"
                 />
                 {errors.name && <p style={{ color: 'red' }}>{errors.username}</p>}
                 </div>
                 <button type="submit"> Register</button>
        </form>
        </div>
    )
}
//{name, email, birthdate, nDni, username, password}
export default Register