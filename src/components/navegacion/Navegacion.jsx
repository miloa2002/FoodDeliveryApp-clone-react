import { NavLink, Outlet } from "react-router-dom"
import { FaHouseUser, FaSearch, FaUndo, FaUserAlt } from "react-icons/fa";

const Navegacion = () => {
    return (
        <>
            <Outlet />
            <nav className="flex items-center justify-between">
                <NavLink to="/home" className={({ isActive }) => isActive ? "text-yellow-300" : "text-gray-800"}>
                    <FaHouseUser style={{ fontSize: "30px" }} />
                </NavLink>
                <NavLink to="/encuentra-platos" className={({ isActive }) => isActive ? "text-yellow-300" : "text-gray-800"}>
                    <FaSearch style={{ fontSize: "25px" }} />
                </NavLink>
                <NavLink to="/ordenes" className={({ isActive }) => isActive ? "text-yellow-300" : "text-gray-800"}>
                    <FaUndo style={{ fontSize: "25px" }} />
                </NavLink>
                <NavLink to="/perfil" className={({ isActive }) => isActive ? "text-yellow-300" : "text-gray-800"}>
                    <FaUserAlt style={{ fontSize: "25px" }} />
                </NavLink>
            </nav>
        </>
    )
}

export default Navegacion
