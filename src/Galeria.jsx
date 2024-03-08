import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import img from "./assets/img/IMG-20240307-WA0077.jpg"
import img2 from "./assets/img/IMG-20240130-WA0020.jpg"
import img3 from "./assets/img/IMG-20240307-WA0076.jpg"
import img4 from "./assets/img/IMG-20240223-WA0017.jpg"
import img5 from "./assets/img/IMG-20240303-WA0095.jpg"
import img6 from "./assets/img/IMG-20240307-WA0072.jpg"
import img7 from "./assets/img/IMG-20240307-WA0073.jpg"
import img8 from "./assets/img/IMG-20240307-WA0074.jpg"
import img9 from "./assets/img/IMG-20240307-WA0075.jpg"
import img10 from "./assets/img/IMG-20240221-WA0020.jpg"
import img11 from "./assets/img/Imagen de WhatsApp 2024-03-07 a las 19.49.26_b5aa5d88.jpg"
import img12 from "./assets/img/Imagen de WhatsApp 2024-03-07 a las 19.49.28_014a354f.jpg"

export default function Galeria() {
  return (
    <div className='container mt-4 ms-5' style={{height:"500px",width: "82%", overflow: "scroll"}}>
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src={img}
          className='w-100 shadow-1-strong rounded mb-4'
        />

        <img
          src={img2}
          className='w-100 shadow-1-strong rounded mb-4'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={img3}
          className='w-100 shadow-1-strong rounded mb-4'
        />

        <img
          src={img4}
          className='w-100 shadow-1-strong rounded mb-4'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={img5}
          className='w-100 shadow-1-strong rounded mb-4'
        />

        <img
          src={img6}
          className='w-100 shadow-1-strong rounded mb-4'
        />
      </MDBCol>
      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={img7}
          className='w-100 shadow-1-strong rounded mb-4'
        />

        <img
          src={img8}
          className='w-100 shadow-1-strong rounded mb-4'
        />
      </MDBCol>
      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={img9}
          className='w-100 shadow-1-strong rounded mb-4'
        />

        <img
          src={img10}
          className='w-100 shadow-1-strong rounded mb-4'
        />
      </MDBCol>
      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={img11}
          className='w-100 shadow-1-strong rounded mb-4'
        />

        <img
          src={img12}
          className='w-100 shadow-1-strong rounded mb-4'
        />
      </MDBCol>
    </MDBRow>
    </div>
  );
}