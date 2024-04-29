import React from 'react'

export const AprendizajesCompu = () => {
  return (
    <>
    <div className="container">
            <h2 className='ms-5 mt-4' style={{ color: 'black', fontSize: "50px", fontWeight: "bold", textAlign: "left" }}>Mis Aprendizajes en Computación</h2>
            <div>
              <h3 className='ms-5 mt-4' >1. Ciclos, Turtle y Python (Algoritmos y Programación Basica)</h3>
              <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                Uno de los principales aprendizajes que he adquirido hasta ahora ha sido el uso de ciclos en Python, como los ciclos `while` y `for`. Estos me han permitido realizar repeticiones y iteraciones en mi código, lo cual es fundamental en la programación.
              </p>
              <pre className='ms-5 text-center' style={{ width: "80%" }}>
                <code>
                  # Ciclo while<br></br>
                  contador = 0<br></br>
                  while contador &lt; 5:<br></br>
                  print(El contador es: contador)<br></br>
                  contador += 1<br></br>
                </code>
              </pre>
              <pre className='ms-5 text-center' style={{ width: "80%" }}>
                <code>
                  from turtle import Turtle<br></br>
                  tortuga = Turtle()<br></br>
                  tortuga.forward(100)<br></br>
                  tortuga.right(90)<br></br>
                  tortuga.forward(100)<br></br>
                  tortuga.right(90)<br></br>
                  tortuga.forward(100)<br></br>
                  tortuga.right(90)<br></br>
                  tortuga.forward(100)<br></br>
                </code>
              </pre>
              <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                <strong>Metacognición:</strong> El aprendizaje de los ciclos y Turtle me ha permitido comprender la importancia de la repetición y la automatización en la programación.
              </p>
            </div>

            <div>
              <h3 className='ms-5 mt-5'>2. Implementación de OpenAI y Pandas (Introduccion a la Ingenieria)</h3>
              <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                Recientemente he tenido la oportunidad de explorar las bibliotecas OpenAI y Pandas en Python debido a una tarea de asistencia. Con OpenAI, he experimentado con modelos de lenguaje y tareas de procesamiento de lenguaje natural. Por otro lado, Pandas me ha permitido trabajar con datos estructurados de manera eficiente.
              </p>
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
              <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                <strong>Metacognición:</strong> El trabajo con OpenAI y Pandas me ha permitido ampliar mis conocimientos en áreas de vanguardia como el procesamiento de lenguaje natural y el análisis de datos. OpenAI me ha mostrado cómo la inteligencia artificial puede ser utilizada para tareas relacionadas con el lenguaje, mientras que Pandas me ha enseñado a manejar y analizar datos de manera efectiva.
              </p>
            </div>

            <div>
              <h3 className='ms-5 mt-5'>3. Compiladores (Introducción a la Ingenieria)</h3>
              <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                Otro aspecto interesante que he aprendido en mi formación en computación es el funcionamiento de los compiladores. Un compilador es un programa que traduce el código fuente de un lenguaje de programación a lenguaje máquina, que puede ser ejecutado por el procesador del ordenador.
              </p>
              <pre className='ms-5 text-center' style={{ width: "80%" }}>
                <code>
                  ejemplo.java -&gt; ejemplo.class <br></br>
                  (javac.exe) -&gt; Compilador de Java
                </code>
              </pre>
              <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                <strong>Metacognición:</strong> Comprender el funcionamiento de los compiladores me ha permitido apreciar la complejidad detrás del proceso de traducción de código fuente a lenguaje máquina.
              </p>
            </div>
            </div>
    </>
  )
}
