import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom"
import UseUser from "../../hook/UseUser"
import { crearUsuario } from "../../api/user";

const UiLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleInicio } = UseUser();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password)
            navigate("/home")
        } catch (error) {
            setError(error.message)
        }
    };


    const handleGoogleInicio = async (e) => {
        e.preventDefault();
        try {
            const { user } = await googleInicio();
            const newUser = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }
            const id = user.uid
            await crearUsuario(newUser, id)
            console.log(user)
            navigate("/home")
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="h-screen py-20 flex justify-between flex-col max-w-md mx-auto p-5">
            <h2 className="text-3xl font-bold colorGrayDrak">Inicia sesión</h2>
            {error && <p>{error}</p>}
            <form
                onSubmit={handleSubmit}
            >

                <label
                    className="colorGray text-sm"
                    htmlFor="Email">
                    Correo: </label>
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
                    htmlFor="password">
                    Contraseña: </label>
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
                    value="Ingresar"
                />
            </form>
            <div>
                <GoogleButton onClick={handleGoogleInicio} />
            </div>
            <div>
                <Link to={"/login-cel"}><button className="bg-green-600 p-4 text-white">Inicia sesión con tu teléfono</button></Link>
            </div>
            <div>
                <p className="text-center">¿No tienes una cuenta? <Link className="font-bold" to={"/registro"}>Crea una</Link></p>
            </div>
        </div>
    )
}

export default UiLogin
