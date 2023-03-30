import React from 'react';

const Marcas = () => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marcas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/#">Samsung</a></li>
                  <li><a className="dropdown-item" href="/#">Motorola</a></li>
                  <li><a className="dropdown-item" href="/#">Xiaomi</a></li>
                </ul>
              </li>
        </div>
    );
}

export default Marcas;
