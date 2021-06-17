import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from './Router/Menu';
import './styles/styles.scss';
import { rutas } from './Router/route-config';
import { configurarValidaciones } from './Validations/validations';
// Funcion para agregar validaciones personalizadas con Yup
configurarValidaciones();

function App() {


  return (
    <>
      <BrowserRouter>

        <Menu />

        <div className='container mt-5'>

          <Switch>
            {
              rutas.map(({ path, exact, Component }) =>
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                >
                  <Component />
                </Route>
              )
            }
            <Route path="*">
              <Redirect to='/'/>
            </Route>
          </Switch>

        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
