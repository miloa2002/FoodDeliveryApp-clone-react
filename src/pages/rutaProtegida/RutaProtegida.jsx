import { Navigate } from "react-router-dom"
import UseUser from "../../hook/UseUser";

const RutaProtegida = ({ children }) => {
    const { user } = UseUser();
    if (!user) {
        return <Navigate to="/" />
    }
    return children
}

export default RutaProtegida
