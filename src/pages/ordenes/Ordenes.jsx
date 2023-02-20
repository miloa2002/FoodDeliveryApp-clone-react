import Navegacion from "../../components/navegacion/Navegacion"
import PageOrdenesUi from "../../components/PageOrdenesUi/PageOrdenesUi"

const Ordenes = () => {
    return (
        <div className="h-screen py-20 flex justify-between flex-col max-w-md mx-auto p-5">
            <PageOrdenesUi />
            <Navegacion />
        </div>
    )
}

export default Ordenes
