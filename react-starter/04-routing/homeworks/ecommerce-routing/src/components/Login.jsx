import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const { logIn, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    console.log('isAuthenticated: ', isAuthenticated)

    const handleLogin = () => {
        logIn()
        navigate('/')
    }

    return (
        <>
            <div>Login Page</div>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default LoginPage