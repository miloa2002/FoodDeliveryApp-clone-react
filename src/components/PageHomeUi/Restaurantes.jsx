import UseRestaurante from "../../hook/UseRestaurante"

const Restaurantes = () => {


    const { listas } = UseRestaurante();

    return (
        <div className="overflow-y-scroll my-3">
            {listas && listas.map(({ banner, id, schedule, stars }) => (

                <div className="flex items-center gap-3 mb-3" key={id}>
                    <img src={banner} alt="img-restaurantes" width="150" />
                    <div>
                        <p className="font-semibold">{id}</p>
                        <p className="text-sm font-light ">{schedule}</p>
                        <p className="text-xs">estrellas : {stars}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Restaurantes
