import PageHomeUi from "../../components/PageHomeUi/PageHomeUi";
import Navegacion from "../../components/navegacion/Navegacion";

const Home = () => {
    return (
        <div className="h-screen py-20 flex flex-col max-w-md mx-auto p-5">
            <PageHomeUi />
            <Navegacion />
        </div>
    )
}

export default Home
