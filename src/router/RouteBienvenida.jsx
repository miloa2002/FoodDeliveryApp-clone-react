import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PantallaBienvenida from '../pages/Bienvenida/PantallaBienvenida';
import SlidePagina1 from '../pages/slides/SlidePagina1';
import SlidePagina2 from '../pages/slides/SlidePagina2';
import SlidePagina3 from '../pages/slides/SlidePagina3';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Registro from '../pages/registro/Registro';
import Home from '../pages/home/Home';
import RutaProtegida from '../pages/rutaProtegida/RutaProtegida';

const RouteBienvenida = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PantallaBienvenida />} />
                <Route path='/SlidePagina1' element={<SlidePagina1 />} />
                <Route path='/SlidePagina2' element={<SlidePagina2 />} />
                <Route path='/SlidePagina3' element={<SlidePagina3 />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/home' element={<RutaProtegida><Home /></RutaProtegida>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteBienvenida
