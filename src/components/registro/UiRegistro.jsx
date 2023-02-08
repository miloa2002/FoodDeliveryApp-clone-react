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
        <div className="h-screen py-20 flex justify-between items-center flex-col w-96 mx-auto p-5">
            {error && <p>{error}</p>}
            <form
                onSubmit={handleSubmit}
            >

                <label htmlFor="Email">Correo: </label>
                <input
                    className='block'
                    type="email"
                    id='Email'
                    placeholder='correo@correo.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Contraseña: </label>
                <input
                    className='block'
                    type="password"
                    id='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <input type="submit" value="Ingresar" />
            </form>
            <div>
                <p>Ya tienes una cuenta? <Link to={"/login"}>Inicia sesión</Link></p>
            </div>
        </div>
    )
}

export default UiRegistro
