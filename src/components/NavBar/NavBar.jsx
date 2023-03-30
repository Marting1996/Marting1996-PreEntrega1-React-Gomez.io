import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Promos from './Promos/Promos';
import Marcas from './Marcas/Marcas';
import Accesorios from './Accesorios/Accesorios';
import Buscador from './Buscador/Buscador';

const NavBar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">
                            <img src="https://www.zarla.com/images/zarla-zona-smartphone-1x1-2400x2400-20220618-kp48vfhxffprq3r9fykr.png?crop=1:1,smart&width=250&dpr=2" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            Tu Celu
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                                </li>
                                <Promos />
                                <Marcas />
                                <Accesorios />
                            </ul>
                            <Buscador />
                            <CartWidget cantCarrito={1} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
