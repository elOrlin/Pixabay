import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(5)

  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda){
        if(busqueda === "") return null;
        const imagenesPorPagina = 30;
        const key = '22916283-d821239aee0b9bb3282a98a76';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        guardarImagenes(resultado.hits)
  
        const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
  
        guardarTotalPaginas(calcularTotalPaginas);

       const jumbotron = document.querySelector('.jumbotron')
       jumbotron.scrollIntoView({behavior: 'smooth'});
      }
    }
    consultarApi();
  }, [busqueda, paginaActual])

  //definir pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if(nuevaPaginaActual === 0) return null;

    guardarPaginaActual(nuevaPaginaActual)
  }

  //definir pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual === totalpaginas) return null;

    guardarPaginaActual(nuevaPaginaActual)
  }
  
  return (
        <div className="container">
          <div className="jumbotron">
              <p className="lead text-center ">Buscador de Imaganes</p>

              <Formulario 
                guardarBusqueda={guardarBusqueda}
              />
          </div>

          <div className="row justify-content-center"> 
              <ListadoImagenes 
                imagenes={imagenes}
              />
          </div>
          <div className="text-center">
            {(paginaActual === 1) ? null : (
                <button
                  type="button"
                  className="bbtn btn-info mr-1"
                  onClick={paginaAnterior}
                >&laquo; Anterior</button>
              )}

              {(paginaActual === totalpaginas) ? null : (
                  <button
                    type="button"
                    className="bbtn btn-info"
                    onClick={paginaSiguiente}
                  >Siguiente &raquo;</button>
              )}
          </div>
        </div>
  );
}

export default App;
