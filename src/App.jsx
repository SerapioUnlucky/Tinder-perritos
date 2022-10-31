import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Rechazado from './Rechazados';
import Aceptado from './Aceptados';
import Candidato from './Candidato';

function App() {

  useEffect(() => {

    cargarPerritos();
        
  }, []);

  const [perritos, setPerritos] = useState([]);
  const [rechazados, setRechazados] = useState([]);
  const [aceptados, setAceptados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarPerritos = () => {

    axios.get("https://dog.ceo/api/breeds/image/random").then(

      (response) => {

        setPerritos(response.data);
        setCargando(false);

      },
      (error) => {

        console.log(error);

      }

    );

  };

  const Rechazados = () => {

    const ordenarRechazados = rechazados.reverse();

    setCargando(true);    
    setRechazados([...ordenarRechazados, perritos].reverse());

    axios.get("https://dog.ceo/api/breeds/image/random").then(

      (response) => {

        setPerritos(response.data);
        setCargando(false);

      },
      (error) => {

        console.log(error);

      }

    );

  }

  const Aceptados = () => {

    const ordenarAceptados = aceptados.reverse();

    setCargando(true);
    setAceptados([...ordenarAceptados, perritos].reverse());

    axios.get("https://dog.ceo/api/breeds/image/random").then(

      (response) => {

        setPerritos(response.data);
        setCargando(false);

      },
      (error) => {

        console.log(error);

      }

    );

  }

  const OtraOportunidad = (perro) => {

    const ordenar = aceptados.reverse();
    
    setAceptados([...ordenar, perro].reverse());
    
    const moverRechazado = rechazados.filter((dog) => dog !== perro);

    setRechazados(moverRechazado);

  }

  const Arrepentimiento = (perro) => {

    const ordenar = rechazados.reverse();

    setRechazados([...ordenar, perro].reverse());

    const moverAceptado = aceptados.filter((dog) => dog !== perro);

    setAceptados(moverAceptado);

  }

  return (

    <div className="tinder">

      <div className="dog">

        <h1>Rechazados</h1>

        {rechazados.map((rechazado, index) => (

          <Rechazado key={index} perro={rechazado} funcion={OtraOportunidad} />

        ))}

      </div>

      <div className='candidato'>

        <h1>Candidatos</h1>
        {cargando ? <h2> Cargando...</h2> :
          
          (
            
            <>
              <Candidato perro={perritos} />

              <br/>
              <button onClick={() => Rechazados()}>Rechazar</button>
              <button onClick={() => Aceptados()}>Aceptar</button>
            </>
          )

        }
      </div>

      <div className="dog">

        <h1>Aceptados</h1>

        {aceptados.map((aceptado, index) => (

          <Aceptado key={index} perro={aceptado} funcion={Arrepentimiento} />

        ))}

      </div>

    </div>
  )
}

export default App;
