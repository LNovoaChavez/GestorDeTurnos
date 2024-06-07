import axios from "axios";
import { useRef } from "react";
import style from "./Login.module.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { loginSuccess } from "../../redux/userSlice";
import {fetchUserAppointment} from "../../redux/userAppointmentSlice.js"

const Login = () => {
    const formLoginRef = useRef(); // Forma de evitar useState para el form, genera referencia
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleLogin = async (e) => {
        try {
            e.preventDefault() 
            const formLoginData = new FormData(formLoginRef.current) 
            const userData = Object.fromEntries(formLoginData) 
            
            const result = await axios.post("http://localhost:3000/users/login", userData);
            dispatch(loginSuccess(result.data.user))
            dispatch(fetchUserAppointment(result.data.user.id))
            
            
            toast.success("Registered successfully! Redirecting to your appointments...")
                setTimeout(()=>{
                    e.target.reset();
                    navigate("/appointments")
                }, 2000)
        } catch (e) {
            console.error(e?.responde?.data?.detail);
        }
    }
    

    return (
        <div className={style.loginContainer}>
            <h2>User Login</h2>
            <form ref={formLoginRef} onSubmit={handleLogin}> 
                <div>
                    <label>Username: </label>
                    <input type="text"  name= "username"  placeholder="Ricardo"/>
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password"  name= "password"  placeholder="Ej: Ricardo12345" />
                 </div>
                <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default Login