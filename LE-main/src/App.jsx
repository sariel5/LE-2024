import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from './Páginas/inicio'
import Log from './Páginas/login'
import Contactanos from './Páginas/Contactanos'
import Inicio_sesion from './Páginas/inicio_sesion'
import Registro from './Páginas/Registro'
import Crea_tus_diseños from './Páginas/Crea_tus_diseños'
import Tus_diseños from './Páginas/Tus_diseños'
import Datos_del_usuario from './Páginas/Datos_del_usuario'
import Contactanos_login from './Páginas/Contactanos_login'



export default function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="/login" element={<Log/>} />
        <Route exact path="/Contactanos" element={<Contactanos/>} />
        <Route exact path="/inicio_sesion" element={<Inicio_sesion/>} />
        <Route exact path="/Registro" element={<Registro/>} />
        <Route exact path="/Crea_tus_diseños" element={<Crea_tus_diseños/>} />
        <Route exact path="/Tus_diseños" element={<Tus_diseños/>} />
        <Route exact path= "/Datos_del_usuario_" element={<Datos_del_usuario/>} />
        <Route exact path= "/Contactanos_login" element= {<Contactanos_login/>} />


      </Routes>
    </Router>
  )
}