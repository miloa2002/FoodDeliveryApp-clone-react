import { useContext } from "react"
import { UserAuthContext } from "../context/UserAuthContextProvider"

const UseUser = () => {
    return useContext(UserAuthContext)
}

export default UseUser
