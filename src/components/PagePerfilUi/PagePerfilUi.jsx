import UseUser from "../../hook/UseUser"

const PagePerfilUi = () => {

    const { user, logOut } = UseUser();

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <p>welcome {user && user.email}</p>
            {user.rol == "admin" ? <p>Hola admin</p> : ""}
            <img src={user.photoURL} alt="" />

            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}

export default PagePerfilUi
