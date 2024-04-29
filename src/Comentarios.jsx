import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const Comentarios = () => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    obtenerComentarios();
  }, []);

  const obtenerComentarios = async () => {
    try {
      const response = await axios.get('https://backend-portfolio-eosin.vercel.app/api/comments/mostrar', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response)
      if (response) {
        setComentarios(response.data.comentario);
      } else {
        throw new Error('Error al obtener comentarios');
      }
    } catch (error) {
      console.error('Error al obtener comentarios', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al obtener los comentarios. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://backend-portfolio-eosin.vercel.app/api/comments/agregar', {
        "nombre": nombre,
        "comentario": comentario
      });

      if (response) {
        const alert = await Swal.fire({
          icon: 'success',
          title: '¡Comentario enviado con éxito!',
          showConfirmButton: true,
          confirmButtonText: "OK"
        });
        
        if (alert) {
          setNombre('');
          setComentario('');
          obtenerComentarios();
        }
      } else {
        throw new Error('Error al enviar comentario');
      }
    } catch (error) {
      console.error('Error al enviar comentario', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar el comentario. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-3" style={{ width: "100%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
              style={{ width: "300px" }}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <textarea
              className="form-control"
              placeholder="Ingresa tu comentario"
              style={{ width: "500px", paddingTop:"25px" }}
              maxLength={100}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary" style={{ width: "300px" }}>Enviar</button>
          </div>
        </form>
        <div className="mt-4 row">
        {comentarios.map((comentario, index) => (
  <div className="col-md-6" key={index}>
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-2">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Imagen de usuario" className="img-fluid rounded-circle" />
          </div>
          <div className="col text-center">
            <h5 className="card-title">{comentario.nombre}</h5>
            <p className="card-text">{comentario.comentario}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </>
  );
};
