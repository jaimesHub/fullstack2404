import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace />
    }

    console.log('isAuthenticated:: ', isAuthenticated)

    // console.log(children)

    return children
}

export default ProtectedRoute