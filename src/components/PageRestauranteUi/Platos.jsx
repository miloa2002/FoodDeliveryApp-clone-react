import { Link } from "react-router-dom"

const Platos = ({ platos }) => {

    return (
        <>
            <div className="grid grid-cols-2 mt-5 overflow-y-scroll" >
                {platos.map(({ id, price, image, cookingTime, description }) => (
                    <Link key={id} to={`/plato/${id}`} state={{ cookingTime, image, price, description }}>
                        <div className="mb-2">
                            <img src={image} alt="imagen plato" className="w-40 h-40 object-fit-cover" />

                            <p>{id}</p>
                            <p className="text-gray-400">{price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Platos
