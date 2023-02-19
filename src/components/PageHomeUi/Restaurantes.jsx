import UseRestaurante from "../../hook/UseRestaurante"
import { Link } from "react-router-dom"
import { Rating } from "@mui/material"

const Restaurantes = () => {


    const { listas } = UseRestaurante();

    return (
        <div className="overflow-y-scroll my-3">
            {listas && listas.map(({ banner, id, schedule, stars, description, logo, categorias }) => (
                <div className="flex items-center gap-3 mb-3" key={id} >
                    <Link to={`/restaurante/${id}`} state={{ logo, description, banner, schedule, stars, categorias, id }}>
                        <img src={banner} alt="img-restaurantes" width="150" />
                        <div>
                            <p className="font-semibold">{id}</p>
                            <p className="text-sm font-light ">{schedule}</p>
                            <Rating name="half-rating" defaultValue={stars} precision={0.5} readOnly />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Restaurantes
