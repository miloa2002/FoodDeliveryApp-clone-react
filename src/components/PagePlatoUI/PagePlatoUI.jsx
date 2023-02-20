import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import UseRestaurante from "../../hook/UseRestaurante";

const PagePlatoUI = () => {
    const { id } = useParams();
    const location = useLocation()
    const { cookingTime, image, price, description } = location.state

    const { productosCarro, setProductosCarro, count, setCount, decremento } = UseRestaurante();

    const navigate = useNavigate()

    const datosProducto = {
        id,
        image,
        price,
        cantidad: count
    }

    const agregarProductoCarrito = () => {
        if (productosCarro.some(item => item.id === datosProducto.id)) {
            setProductosCarro(
                productosCarro.map(item => {
                    if (item.id === datosProducto.id) {
                        return { ...item, cantidad: item.cantidad + datosProducto.cantidad }
                    } else {
                        return item;
                    }
                })
            )
        } else {
            setProductosCarro([...productosCarro, datosProducto])
        }

        navigate("/ordenes")
    }



    return (
        <>
            <div>
                <img src={image} alt="plato" />
                <p className="mt-2 font-medium">{id}</p>
                <p className="mt-2">Tiempo de cocina: <span className="font-semibold">{cookingTime}</span></p>
                <p className="text-sm mt-3">{description}</p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex bg-gray-200 w-36 justify-between p-3 rounded-md">
                    <button onClick={decremento} className="text-xl w-full h-full">-</button>
                    <span className="text-xl">{count}</span>
                    <button onClick={() => setCount(count + 1)} className="text-xl w-full h-full">+</button>
                </div>
                <div
                    className="flex items-center gap-3 rounded-md w-55 bienvenida p-3">
                    <p onClick={agregarProductoCarrito} className="cursor-pointer">Add</p>
                    <h2 className="text-xl font-medium">{price}</h2>
                </div>
            </div>
        </>
    )
}

export default PagePlatoUI
