import logo from "../../assets/imgs/Logo.svg"
import { Link } from "react-router-dom"

const PantallaBienvenida = () => {
    return (
        <div className="bienvenida h-screen grid place-items-center">
            <Link to={"/SlidePagina1"}><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default PantallaBienvenida
