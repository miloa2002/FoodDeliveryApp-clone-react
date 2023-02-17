import UseRestaurante from "../../hook/UseRestaurante";

const FiltroUi = () => {


    const { handleTodos, handlePizza, handlePasta, handleHamburguesa, handleMariscos, handlePostres } = UseRestaurante()


    return (
        <div>
            <p className="font-light my-3">Restaurantes</p>

            <div className="flex justify-between items-center flex-wrap gap-2">
                <button onClick={handleTodos} className="p-2 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">Todos</button>
                <button onClick={handlePizza} className="p-2 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">Pizza</button>
                <button onClick={handlePasta} className="p-2 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">Pasta</button>
                <button onClick={handleHamburguesa} className="p-2 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">Hamburguesas</button>
                <button onClick={handleMariscos} className="p-2 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">Mariscos</button>
                <button onClick={handlePostres} className="p-2 bg-gray-200 rounded-md text-xs focus:bg-yellow-300">Postres</button>
            </div>

        </div>
    )
}

export default FiltroUi
