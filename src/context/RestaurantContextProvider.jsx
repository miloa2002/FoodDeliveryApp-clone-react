import { createContext, useState, useEffect } from "react";
import { getRestaurantes } from "../api/restaurante";

export const RestaurantContext = createContext();

const RestaurantContextProvider = ({ children }) => {

    const [listas, setListas] = useState([])
    const [copia, setCopia] = useState([]);

    const getRestaurantesData = async () => {
        try {
            const data = await getRestaurantes();
            const docs = []
            data.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setListas(docs)
            setCopia(docs)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRestaurantesData();
    }, [])




    /*****filtros******** */
    const handleTodos = () => {
        setListas(copia)
    }

    const handlePizza = () => {
        const listasFiltradas = copia.filter((lista) => {
            const categoriaPizza = lista.categorias
            if (categoriaPizza.includes("Pizzas")) {
                return lista
            }

        })
        setListas(listasFiltradas)
    }

    const handlePasta = () => {
        const listasFiltradas = copia.filter((lista) => {
            const categoriaPasta = lista.categorias
            if (categoriaPasta.includes("Pastas")) {
                return lista
            }

        })
        setListas(listasFiltradas)
    }

    const handleHamburguesa = () => {
        const listasFiltradas = copia.filter((lista) => {
            const categoriaPasta = lista.categorias
            if (categoriaPasta.includes("Hamburguesas")) {
                return lista
            }

        })
        setListas(listasFiltradas)
    }

    const handleMariscos = () => {
        const listasFiltradas = copia.filter((lista) => {
            const categoriaPasta = lista.categorias
            if (categoriaPasta.includes("Mariscos")) {
                return lista
            }

        })
        setListas(listasFiltradas)
    }

    const handlePostres = () => {
        const listasFiltradas = copia.filter((lista) => {
            const categoriaPasta = lista.categorias
            if (categoriaPasta.includes("Postres")) {
                return lista
            }

        })
        setListas(listasFiltradas)
    }

    return (
        <RestaurantContext.Provider value={{ listas, setListas, copia, setCopia, handleTodos, handlePizza, handlePasta, handleHamburguesa, handleMariscos, handlePostres }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default RestaurantContextProvider
