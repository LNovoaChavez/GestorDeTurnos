import './App.css'
import "react-toastify/ReactToastify.css"
import Home from "./views/Home/Home"
import NavMain from './components/Nav/NavMain'
import MisCitas from './views/Cita/MisCitas'
import Register from './views/Register/Register'
import Footer from "./views/Footer/Footer"
import About from './views/About/About'
import Treatments from './views/Treatments/Treatments'
import Appointment from './views/Appointment/Appointment'
import Login from "./views/Login/Login"
import NotFound from './views/NotFound/NotFound'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import {ToastContainer} from 'react-toastify' //me permite disponer de todo el componente d emi aplicaccion
import Products from './views/Products/Products'

function App() {
 
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <NavMain/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointments' element={<MisCitas/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/treatments" element={<Treatments/>} />
        <Route path='/newAppointment' element={<Appointment/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/> 
      </Routes>
      <Footer/>  
    </BrowserRouter>

    </>
  )
}

export default App
 