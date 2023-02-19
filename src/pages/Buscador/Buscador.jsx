import PageBuscadorUi from '../../components/PageBuscadorUi/PageBuscadorUi'
import Navegacion from '../../components/navegacion/Navegacion'

const Buscador = () => {
    return (
        <div className="h-screen py-20 flex justify-between flex-col max-w-md mx-auto p-5">
            <PageBuscadorUi />
            <Navegacion />
        </div>

    )
}

export default Buscador
