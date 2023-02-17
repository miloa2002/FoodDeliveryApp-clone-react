import { useContext } from "react"
import { RestaurantContext } from "../context/RestaurantContextProvider"

const UseRestaurante = () => {
    return useContext(RestaurantContext)
}

export default UseRestaurante
