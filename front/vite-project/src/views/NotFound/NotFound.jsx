import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown -1)
        }, 1000)

        setTimeout(() => {
            clearInterval(countdownInterval)
            navigate("/")
        }, 15000)

        return () => clearInterval(countdownInterval)
    }, [navigate])

    return (
        <div>
            <h2>404 - Page not found</h2>
            <p>Regirecting tohome in {countdown} seconds...</p>
        </div>
    )
}
//44.36
export default NotFound