import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Registro from '../pages/registro/Registro';
import Home from '../pages/home/Home';
import RutaProtegida from '../pages/rutaProtegida/RutaProtegida';
import LoginPhone from '../pages/loginPhone/LoginPhone';
import Perfil from '../pages/perfil/Perfil';
import Buscador from '../pages/Buscador/Buscador';
import Ordenes from '../pages/ordenes/Ordenes';
import Restaurante from '../pages/Restaurante/Restaurante';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/restaurante/:id' element={<RutaProtegida><Restaurante /></RutaProtegida>} />
                <Route path='/' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/home' element={<RutaProtegida><Home /></RutaProtegida>} />
                <Route path='/login-cel' element={<LoginPhone />} />
                <Route path='/perfil' element={<RutaProtegida><Perfil /></RutaProtegida>} />
                <Route path='/encuentra-platos' element={<RutaProtegida><Buscador /></RutaProtegida>} />
                <Route path='/ordenes' element={<RutaProtegida><Ordenes /></RutaProtegida>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
