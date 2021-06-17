import { NavLink } from 'react-router-dom'

export const Menu = () => {

  const activeClass: string = 'active';

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

      <div className="container-fluid">

        <NavLink
          to="/"
          className='navbar-brand'
          activeClassName={activeClass}
        >
          React Peliculas
        </NavLink>

        <div className='collapse navbar-collapse'>

          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>

              <NavLink
                to="/peliculas/filtrar"
                className='nav-link'
                activeClassName={activeClass}
              >
                Filtrar Peliculas
              </NavLink>

            </li>
            <li className='nav-item'>

              <NavLink
                to="/peliculas/crear"
                className='nav-link'
                activeClassName={activeClass}
              >
                Crear Peliculas
              </NavLink>

            </li>
            <li className='nav-item'>

              <NavLink
                to="/generos"
                className='nav-link'
                activeClassName={activeClass}
              >
                Géneros
              </NavLink>

            </li>
            <li className='nav-item'>

              <NavLink
                to="/actores"
                className='nav-link'
                activeClassName={activeClass}
              >
                Actores
              </NavLink>

            </li>
            <li className='nav-item'>

              <NavLink
                to="/cines"
                className='nav-link'
                activeClassName={activeClass}
              >
                Cines
              </NavLink>

            </li>
          </ul>

        </div>

      </div>

    </nav>
  )
}
