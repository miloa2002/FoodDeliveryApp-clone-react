import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";
import PageRestauranteUi from "../../components/PageRestauranteUi/PageRestauranteUi";

const Restaurante = () => {

    const [platos, setPlatos] = useState([])

    const { id } = useParams()

    const mostrarRestauratePlato = async () => {
        try {
            const dbCollection = collection(db, `restaurantes/${id}/menu`);
            const data = await getDocs(dbCollection);
            const docs = []
            data.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setPlatos(docs)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        mostrarRestauratePlato()
    }, [])



    return (
        <div className="h-screen py-20 flex flex-col max-w-md mx-auto p-5">
            <PageRestauranteUi platos={platos} />
        </div>

    )
}

export default Restaurante
