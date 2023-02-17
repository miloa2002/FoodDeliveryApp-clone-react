import Navegacion from "../../components/navegacion/Navegacion"
import PagePerfilUi from "../../components/PagePerfilUi/PagePerfilUi"

const Perfil = () => {
    return (
        <div className="h-screen py-20 flex justify-between flex-col max-w-md mx-auto p-5">
            <PagePerfilUi />
            <Navegacion />
        </div>
    )
}

export default Perfil
