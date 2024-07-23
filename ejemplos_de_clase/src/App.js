import logo from './logo.svg';
import './App.css';

import MiNombre from './components/MiNombre';
import MiTarjeta from './components/MiTarjeta';
import EjemploImagenes from './components/EjemploImagenes';
import Likes from './components/Likes/Likes';
import LikesUseState from './components/Likes/LikesUseState';
import FechaContador from './components/FechaContador'
import RenderCondicional from './components/RenderCondicional';
import ListaInvitados from "./components/ListaInvitados"
import ListaInvitadosEditable from "./components/ListaInvitadosEditable"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 1. Pasaje de propiedades a componente */}
        {/* <MiNombre nombre="INOVE"/> */}

        {/* 2. Propiedad child a componente */}
        {/* <MiTarjeta nombre="INOVE">
          <p>
            Este es un elemento "hijo" que se pasará
            al componente "MiTarjeta" como props.children
            para su uso
          </p>
        </MiTarjeta> */}

        {/* 3. Ejemplo de uso de imagenes */}
        {/* <EjemploImagenes/> */}

        {/* 4. Problema de renderizado */}
        {/* <Likes number={0}/> */}

        {/* 5. Solución con useState */}
        {/* <LikesUseState number={0}/> */}
        
        {/* 6. Otro ejemplo de uso */}
        {/* <FechaContador/> */}

        {/* 7. Renderizado condicional */}
        {/* <RenderCondicional/> */}

        {/* 8. Mapeo de datos con map() */}
        {/* <ListaInvitados/> */}

        {/* 9. Manipular un array con useState */}
        {/* <ListaInvitadosEditable/> */}

      </header>
    </div>
  );
}

export default App;
