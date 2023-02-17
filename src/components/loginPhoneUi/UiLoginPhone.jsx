import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import logoCelLogin from "../../assets/imgs/Logo-cel-sign.svg"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import UseUser from '../../hook/UseUser'


const UiLoginPhone = () => {

    const [numero, setNumero] = useState("");
    const [opcion, setOpcion] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [error, setError] = useState("");

    const { configuracionCaptcha } = UseUser();

    const navigate = useNavigate();

    const handleObtener = async (e) => {
        e.preventDefault();
        setError("")

        if (numero === "" || numero === undefined) {
            return setError("Ingresa un número válido")
        }
        try {
            const res = await configuracionCaptcha(numero);
            console.log(res)
            setConfirmar(res)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleVerificar = async (e) => {
        e.preventDefault();
        console.log(opcion)
        if (opcion === "" || opcion === null) return;
        try {
            setError("");
            await confirmar.confirm(opcion);
            navigate("/home");
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="h-screen py-20 flex justify-between items-center flex-col max-w-md mx-auto p-5">
            <div>
                <img className='mx-auto' src={logoCelLogin} alt="login-cel-logo" width="100" />
                <h2 className="text-3xl text-center mt-5 colorGrayDrak">Iniciar sesión</h2>
                <p className='text-center colorGray'>Inicie sesión o cree una cuenta con su número de teléfono para comenzar a ordenar</p>
            </div>
            {error && <p>{error}</p>}
            <form
                onSubmit={handleObtener}
                className="mb-10 w-full"
            >

                <PhoneInput
                    defaultCountry='PH'
                    value={numero}
                    onChange={setNumero}
                    placeholder="Ingresar número celular"
                    className="w-full mb-5 py-2 outline-none border-b-2"
                />

                <div className='sm:flex justify-between items-center gap-2'>
                    <Link to={"/registro"}>
                        <button
                            className='bg-blue-600 py-1 w-48 hover:bg-blue-700'
                        >Cancelar</button>
                    </Link>
                    <button
                        type='submit'
                        className='bienvenida py-1 w-48 hover:bg-yellow-400'>
                        Enviar</button>
                </div>

            </form>
            <div id='recaptcha-container' />

            {/*verificar*/}
            <div>
                <h2 className="text-3xl text-center mt-5 colorGrayDrak">Verificación</h2>
                <p className='text-center colorGray'>Ingrese el código de cuatro dígitos de SMS</p>
            </div>


            <form
                onSubmit={handleVerificar}
                className="w-full"
            >

                <input
                    type="text"
                    placeholder='Ingresa código de verificación'
                    onChange={e => setOpcion(e.target.value)}
                    className="w-full mb-5 py-2 outline-none border-b-2"
                />


                <div className='sm:flex justify-between items-center gap-2'>
                    <Link to={"/registro"}>
                        <button
                            className='bg-blue-600 py-1 w-48 hover:bg-blue-700'
                        >Cancelar</button>
                    </Link>
                    <button
                        type='submit'
                        className='bienvenida py-1 w-48 hover:bg-yellow-400'>
                        Enviar</button>
                </div>

            </form>
        </div>
    )
}

export default UiLoginPhone
