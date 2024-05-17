import React from 'react';
import img from "./assets/img/seasos.png"


export const Logros = () => {
  return (
    <div className="container">
      <h3 className='ms-5 mt-4' style={{ color: 'black', fontSize: "50px", fontWeight: "bold", textAlign: "center" }}>Logros</h3>
      <div className="logros-container">
        <div className="logro">
          <h4>SEASOS</h4>
          <p>Logre realizar un proyecto con Python, React, Mongo y Flask.</p>
          <p className='mt-1 mb-2'>El cual consiste en la consciencia marina</p>
          <a href="https://seasos-ciencias.firebaseapp.com" target='_blank'>
    <img src={img} alt="Descripción de la imagen" style={{width: "100%", height: "auto"}}/>
  </a>
        </div>
        <div className="logro">
          <h4>Implementaciones de inteligencia artificial en proyectos</h4>
          <p>OpenAi usando pandas y además para realizar busquedas al momento en SEASOS</p>
          <pre className='ms-5 text-center' style={{ width: "80%" }}>
                <code >
                  import openai<br></br>
                  import pandas as pd<br></br>

                  # Configurar la clave API de OpenAI<br></br>
                  openai.api_key = "tu_clave_api"<br></br>

                  # Utilizar el modelo de lenguaje para generar texto<br></br>
                  prompt = "Escribe un párrafo sobre la importancia de la tecnología en la educación."<br></br>
                  respuesta = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=150)<br></br>
                  print(respuesta.choices[0].text)<br></br>

                  # Leer un archivo CSV con Pandas<br></br>
                  datos = pd.read_csv("datos.csv")<br></br>
                  print(datos.head())<br></br>
                </code>
              </pre>
        </div>
        <div className="logro">
          <h4>Obtener buenas calificaciones</h4>
          <p>Obtuve buenas calificaciones , que pueden tener una amplia mejoria pero se obtuvieron encima del promedio.</p>
        </div>
      </div>
    </div>
  );
};
