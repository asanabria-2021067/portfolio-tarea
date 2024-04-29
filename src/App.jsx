import React from 'react';
import { Navbar } from './Navbar';
import img from "./assets/img/yo.jpg"
import Galeria from './Galeria';
import { AprendizajesCompu } from './AprendizajesCompu';
import { AprendizajesTodo } from './AprendizajesTodo';
import { Reflexion } from './Reflexion';
import { Comentarios } from './Comentarios';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <section id="sobre-mi">
            <div className="container">
            <h2 className='ms-5 mt-4' style={{ color: 'black', fontSize: "50px", fontWeight: "bold", textAlign: "left" }}>Acerca de Mí</h2>
            <div className="row">
              <p className='ms-5 mt-2' style={{ width: "55ch", fontSize: "20px" }}>
                Soy un estudiante de Ingeniería en Computación en la Universidad del Valle de Guatemala. Siempre he sido una persona apasionada por la tecnología y cómo puede mejorar nuestras vidas. Decidí estudiar esta carrera porque quiero ser parte de la creación de soluciones innovadoras que puedan tener un impacto positivo en el mundo. Estudie en el Centro Educativo Tecnico Laboral Kinal antes de ingresar a la Universidad. Mi mayor interes es tener una empresa acerca del desarrollo web.
              </p>
              <img src={img} title='Foto personal' style={{ width: "30%", height: "30%", borderRadius: "100%", marginTop: "-5%" }} />
            </div>
            </div>
          </section>

          <section id="primer-mes">
            <div className="container">
            <h2 className='ms-5 mt-4' style={{ color: 'black', fontSize: "50px", fontWeight: "bold", textAlign: "left" }}>Mi Primer Mes en la Universidad</h2>
            <p className='ms-5 mt-2' style={{ fontSize: "20px", width: "82ch" }}>
              Ha sido una experiencia emocionante y desafiante. Me ha impresionado la calidad de la enseñanza y la dedicación de los profesores. Las clases son estimulantes y me han empujado a pensar de manera crítica y creativa. Además de que los compañeros de clase son buenas personas y caen bien
            </p>
            <p className='ms-5 mt-2' style={{ fontSize: "20px", width: "82ch" }}>
              Sin embargo, también he enfrentado algunas dificultades, como adaptarme a un nuevo entorno y manejar una carga de trabajo más intensa. Pero estoy seguro de que con esfuerzo y perseverancia, podré superarlas y aprovechar al máximo esta experiencia universitaria. Lo único que no me ha gustado es el tiempo que invierto en llegar a la universidad desde mi casa y viceversa pero a la larga es una inversión.
            </p>
            <Galeria />
            </div>
          </section>

          <section id="aprendizajes">
            <AprendizajesCompu/>
          </section>
          <section id="aprendizajesTodo">
            <AprendizajesTodo/>
          </section>
          <section id="reflexion">
            <Reflexion/>
          </section>
          <section id="comentarios">
            <Comentarios/>
          </section>
        </main>
      </div>
      <footer>
        <p id='footer'>&copy; 2023 Mi Portfolio. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;