import { ReactElement } from "react"
import { Cargando } from "./Cargando";

interface listadoGenericoProps{
  listado:any;
  children: ReactElement;
  cargandoUI?: ReactElement;
  listadoVacioIU?: ReactElement;
}


export default function ListadoGenerico({listado, cargandoUI, listadoVacioIU, children}: listadoGenericoProps): JSX.Element | any{

  if (!listado) {
    if (cargandoUI) {
      return <>{cargandoUI}</>
    }
    return <Cargando />
  } else if (listado.length === 0){
    if (listadoVacioIU) {
      return <>{listadoVacioIU}</>
    }
    return <>No hay elementos para mostrar</>
  } else {
    return <>{children}</>
  }

}
