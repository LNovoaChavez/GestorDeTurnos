import './App.css'
import Home from "./views/Home/Home"
import NavMain from './components/Nav/NavMain'
import MisCitas from './views/Cita/MisCitas'
import Register from './views/Register/Register'
import Login from "./views/Login/Login"

function App() {
 
  return (
    <>
      <NavMain/>
      <Home/>
      <MisCitas/>
      <Register/>
      <Login/>
    </>
  )
}

export default App
 