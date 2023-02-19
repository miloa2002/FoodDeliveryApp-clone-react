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
        <div className="">
            <div>
                <img
                    className="rounded-full mx-auto"
                    src={user.photoURL} alt=""
                />
                <p className="text-center mt-2">{user.displayName}</p>

            </div>
            <div className="mx-auto">
                <button
                    className="w-full bg-gray-100 p-3 rounded-md"
                    onClick={handleLogout}
                >Cerrar sesión</button>
            </div>
        </div>
    )
}

export default PagePerfilUi
