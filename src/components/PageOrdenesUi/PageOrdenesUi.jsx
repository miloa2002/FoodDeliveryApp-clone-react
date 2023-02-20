import UseRestaurante from "../../hook/UseRestaurante";

const PageOrdenesUi = () => {

    const { productosCarro, count, setCount, decremento } = UseRestaurante();
    return (
        <>
            <div>
                {productosCarro.map(({ cantidad, id, image, price }) => (
                    <div key={id} className="flex gap-8  items-center mb-3">
                        <img src={image} alt="image-cart" width="100" />
                        <div>
                            <div className="flex bg-gray-200 w-36 justify-between rounded-md">
                                <button onClick={decremento} className="text-xl w-full h-full">-</button>
                                <span className="text-xl">{count}</span>
                                <button onClick={() => setCount(count + 1)} className="text-xl w-full h-full">+</button>
                            </div>
                            <p className="text-sm mt-2">{id}</p>
                            <p className="text-gray-400">{(price * cantidad).toFixed(3)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <p>productos</p>
                    <p>60.400</p>
                </div>
                <div className="flex justify-between items-center border-b-2 border-gray-400">
                    <p>Delivery</p>
                    <p>4.500</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Total</p>
                    <p className="text-xl mt-3">64.400</p>
                </div>
                <p></p>
            </div>
        </>
    )
}

export default PageOrdenesUi