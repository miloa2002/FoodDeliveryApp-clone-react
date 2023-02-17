import { FaRoute } from "react-icons/fa";

const Locacion = () => {

    return (
        <div className="flex items-center gap-6">
            <FaRoute style={{ fontSize: "35px" }} className="text-yellow-300" />
            <div>
                <label htmlFor="countries" className="text-sm text-yellow-300 ">Entregar a:</label>
                <select id="countries" className=" text-gray-900 text-sm rounded-lg block w-full outline-none mb-3">
                    <option value="Medellin">Medellín</option>
                    <option value="Bello">Bello</option>
                    <option value="Santa Fe de Antioquia">Santa Fe de Antioquia</option>
                    <option value="Apartado">Apartado</option>
                    <option value="Turbo">Turbo</option>
                    <option value="Andes">Andes</option>
                    <option value="caucasia">caucasia</option>
                    <option value="Arboletes">Arboletes</option>
                    <option value="Belmira">Belmira</option>
                </select>
            </div>
        </div>
    )
}

export default Locacion
