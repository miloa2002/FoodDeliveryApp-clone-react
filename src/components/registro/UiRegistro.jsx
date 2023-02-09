import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import UseUser from "../../hook/UseUser";

const UiRegistro = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = UseUser();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password)
            navigate("/login")
        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div className="h-screen py-20 flex justify-between  flex-col w-96 mx-auto p-5">
            <h2 className="text-3xl font-bold colorGrayDrak">Crea una cuenta</h2>
            {error && <p>{error}</p>}
            <form
                onSubmit={handleSubmit}
            >

                <label
                    className="colorGray text-sm"
                    htmlFor="Email">Correo:
                </label>
                <input
                    className='block mb-5 w-full outline-none py-2 border-b-2'
                    type="email"
                    id='Email'
                    placeholder='correo@correo.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label
                    className="colorGray text-sm"
                    htmlFor="password"
                >Contraseña: </label>
                <input
                    className='block mb-5 w-full outline-none py-2 border-b-2'
                    type="password"
                    id='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <input
                    className="bienvenida w-full p-2 rounded-md hover:cursor-pointer hover:bg-yellow-400"
                    type="submit"
                    value="Crear cuenta"
                />
            </form>
            <div>
                <p className="text-center">¿Ya tienes una cuenta? <Link className="font-bold" to={"/login"}>o Inicia sesión con otros metodos</Link></p>
            </div>
        </div>
    )
}

export default UiRegistro
