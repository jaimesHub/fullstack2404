import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)
    console.log('isAuthenticated:: ', isAuthenticated)

    if (isAuthenticated != null) {
        if (!isAuthenticated) {
            return <Navigate to="/auth/login" />
        }
    }

    return children
}

export default ProtectedRoute