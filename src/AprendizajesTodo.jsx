import Plotly from 'plotly.js-dist';
import React, { useEffect, useState } from 'react';

export const AprendizajesTodo = () => {
    const [editorContent, setEditorContent] = useState('');
    const [error, setError] = useState(false);
    const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
    const [fontSize, setFontSize] = useState(12);
    useEffect(() => {
        // Función para generar los datos y configurar la gráfica
        const plotLogarithm = () => {
            // Generar datos para la gráfica del logaritmo natural
            const x = [];
            const y = [];
            for (let i = 0.1; i <= 5; i += 0.1) {
                x.push(i);
                y.push(Math.log(i));
            }

            // Configurar el diseño de la gráfica
            const layout = {
                xaxis: { title: 'x' },
                yaxis: { title: 'ln(x)' }
            };

            // Configurar los datos de la gráfica
            const data = [{
                x: x,
                y: y,
                type: 'scatter'
            }];

            // Mostrar la gráfica en el div con id "plot"
            Plotly.newPlot('plot', data, layout);
        };

        // Llamar a la función para generar la gráfica
        plotLogarithm();

    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    const handleEditorChange = (e) => {
        setEditorContent(e.target.value);

        // Validar si la fuente es Arial o Times New Roman
        const validFont = e.target.style.fontFamily.includes('Arial') || e.target.style.fontFamily.includes('Times New Roman');

        // Validar si el tamaño de la fuente es 11
        const validFontSize = e.target.style.fontSize === '11px';

        // Mostrar error si la fuente no es válida o el tamaño no es 11
        setError(!validFont || !validFontSize);
    };

    const handleFontFamilyChange = (e) => {
        setFontFamily(e.target.value);
    };

    const handleFontSizeChange = (e) => {
        setFontSize(parseInt(e.target.value));
    };
    return (
        <>
            <div className="container">
                <h2 className='ms-5 mt-4' style={{ color: 'black', fontSize: "50px", fontWeight: "bold", textAlign: "left" }}>Aprendizajes Por Clase</h2>
                <div>
                    <h3 className='ms-5 mt-4 text-center' >Pensamiento Cuantitativo</h3>
                    <pre className='ms-5 text-center' style={{ width: "92%" }}>
                        <p className='ms-5' style={{ fontSize: "20px", width: "82ch", textAlign: "center" }}>
                            Logaritmos:  <span style={{ fontFamily: "monospace" }}>ln(x) log(x)</span>
                        </p>
                        <div id="plot"></div>
                    </pre>
                    <p className='ms-5'>Me sirvieron para tratar diversos problemas de aplicación para temperaturas, intereses etc.</p>
                </div>

                <div>
                    <h3 className='ms-5 mt-4 text-center' >Comunicación Efectiva</h3>

                    <pre className='ms-5' style={{ width: "92%" }}>
                        <p className='ms-5' style={{ fontSize: "20px", width: "82ch", fontWeight: "bold" }}>
                            Normas de escritura y referencias Apa 7
                            <p className='' style={{ fontSize: "15px", width: "82ch" }}>
                                Ingresa un texto
                            </p>
                        </p>

                        <div className='ms-5 text-center' style={{ width: "92%", fontFamily: "Arial, sans-serif" }}>
                            <div>
                                <label htmlFor="fontFamily">Fuente:</label>
                                <select id="fontFamily" value={fontFamily} onChange={handleFontFamilyChange}>
                                    <option value="Arial, sans-serif">Arial</option>
                                    <option value="Times New Roman, serif">Times New Roman</option>
                                    <option value="Courier New, monospace">Courier New</option>
                                    <option value="Verdana, sans-serif">Verdana</option>
                                    <option value="Georgia, serif">Georgia</option>
                                    <option value="Tahoma, sans-serif">Tahoma</option>
                                    <option value="Palatino Linotype, Book Antiqua, Palatino, serif">Palatino</option>
                                    <option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="fontSize">Tamaño de letra:</label>
                                <input id="fontSize" type="number" min="8" max="32" value={fontSize} onChange={handleFontSizeChange} />
                            </div>
                            <textarea
                                value={editorContent}
                                onChange={handleEditorChange}
                                style={{ width: "100%", height: "200px", fontSize: `${fontSize}px`, fontFamily: fontFamily }}
                            />
                            {error && <p style={{ color: "red" }}>El texto no cumple con las normas APA 7. (Arial o Times New Roman) (11 como tamaño)</p>}
                        </div>
                    </pre>
                    <p className='ms-5'>Me sirvió gracias a que la mayoria de trabajos (informes, investigaciones, etc) piden referencias apa 7</p>
                </div>

                <div className='pt-3 pb-4' style={{backgroundImage: "url(https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
                    <h3 className='ms-5 mt-5 text-center'>Quimica General</h3>
                    <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                        Reacciones Quimicas
                    </p>
                    <pre className='ms-5 text-center' style={{ width: "92%" }}>
                        <code>
                            Sal: 2Na + Cl<sub>2</sub>→ 2NaCl
                        </code>
                    </pre>
                    <pre className='ms-5 text-center' style={{ width: "92%" }}>
                        <code>
                            Calor de un sistema: -(Q<sub> sustancia1</sub> + Q<sub> sustancia2</sub>)
                        </code>
                    </pre>
                    <p className='ms-5'>Me sirvieron para distintas experimentaciones y examenes</p>
                </div>
                <div>
                    <h3 className='ms-5 mt-5 text-center'>Coaching para la Excelencia</h3>
                    <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                        Frases inspiradoras
                    </p>
                    <ul className='ms-5'>
                        <li>
                            De los errores se aprende.
                        </li>
                        <li>
                            La universidad no es facil pero se puede si se esfuerza.
                        </li>
                        <li>
                            No estan solos, ustedes pueden.
                        </li>
                    </ul>
                    <p className='ms-5'>Me sirvieron en mis momentos cuando me sentía bajoneado o triste</p>
                </div>
                <div className='pt-3 pb-4' style={{backgroundImage: "url(https://images.pexels.com/photos/5878523/pexels-photo-5878523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
                    <h3 className='ms-5 mt-5 text-center'>Ciencias de la vida</h3>
                    <p className='ms-5' style={{ fontSize: "20px", width: "82ch" }}>
                        Fotosintesis y Respiración Celular
                    </p>
                    <pre className='ms-5 text-center' style={{ width: "92%" }}>
                        <code>
                            Fotosintesis: 6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>6O<sub>2</sub>
                        </code>
                    </pre>
                    <pre className='ms-5 text-center' style={{ width: "92%" }}>
                        <code>
                            Respiración Celular:  C<sub>6</sub>H<sub>12</sub>6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O
                        </code>
                    </pre>
                    <p className='ms-5'>Me sirvierón para comprender conceptos para parciales</p>
                </div>
                
            </div>
        </>
    )
}
