import React from 'react'
import { Link } from 'react-scroll'
import { SocialIcon } from 'react-social-icons'
export const Navbar = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg mb-4 pb-4 pt-4"
                data-bs-theme="dark"
                style={{ backgroundColor: "#1b3641" }}
            >
                <div className="container container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <ul className="navbar-nav me-auto mx-auto gap-5">
                        <li className='nav-item'><Link activeClass="active" to="sobre-mi" spy={true} smooth={true} offset={-70} duration={500} style={{ color: 'white', fontSize: "15px", fontWeight: "bold", textAlign: "center", cursor: "pointer" }}>Sobre Mí</Link></li>
                        <li className='nav-item'><Link activeClass="active" to="primer-mes" spy={true} smooth={true} offset={-70} duration={500} style={{ color: 'white', fontSize: "15px", fontWeight: "bold", textAlign: "center", cursor: "pointer" }}>Primer Mes</Link></li>
                        <li className='nav-item'><Link activeClass="active" to="aprendizajes" spy={true} smooth={true} offset={-70} duration={500} style={{ color: 'white', fontSize: "15px", fontWeight: "bold", textAlign: "center", cursor: "pointer" }}>Aprendizajes</Link></li>
                    </ul>
                        <ul className="navbar-nav me-auto mx-auto gap-3">
                            <li className='nav-item'><a><SocialIcon className='icon' bgColor="black" fgColor="white" url="https://www.linkedin.com/in/angel-sanabria-desarrollador/" target='_blank' /></a></li>
                            <li className='nav-item'><a><SocialIcon className='icon' bgColor="black" fgColor="white" url="https://www.instagram.com/_angel.s.m_/" target='_blank' /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
