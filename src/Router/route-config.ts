import { IndiceGeneros } from "../Components/Generos/IndiceGeneros";
import { LandingPage } from "../Components/Peliculas/LandingPage";
import { CrearGenero } from "../Components/Generos/CrearGenero";
import { EditarGenero } from "../Components/Generos/EditarGenero";
import { IndiceActores } from "../Components/Actores/IndiceActores";
import { CrearActores } from "../Components/Actores/CrearActores";
import { EditarActores } from "../Components/Actores/EditarActores";
import { IndiceCines } from "../Components/Cines/IndiceCines";
import { CrearCines } from "../Components/Cines/CrearCines";
import { EditarCines } from "../Components/Cines/EditarCines";
import { FiltroPeliculas } from '../Components/Peliculas/FiltroPeliculas';
import { CrearPeliculas } from '../Components/Peliculas/CrearPeliculas';
import { EditarPeliculas } from '../Components/Peliculas/EditarPeliculas';

export const rutas = [
  { path: "/generos", Component: IndiceGeneros, exact: true, },
  { path: "/generos/crear", Component: CrearGenero, exact: false, },
  { path: "/generos/editar/:id(\\d+)", Component: EditarGenero, exact: false, },

  { path: "/actores", Component: IndiceActores, exact: true, },
  { path: "/actores/crear", Component: CrearActores, exact: false, },
  { path: "/actores/editar/:id(\\d+)", Component: EditarActores, exact: false, },

  { path: "/cines", Component: IndiceCines, exact: true, },
  { path: "/cines/crear", Component: CrearCines, exact: false, },
  { path: "/cines/editar/:id(\\d+)", Component: EditarCines, exact: false, },

  { path: "/peliculas/filtrar", Component: FiltroPeliculas, exact: false, },
  { path: "/peliculas/crear", Component: CrearPeliculas, exact: false, },
  { path: "/peliculas/editar/:id(\\d+)", Component: EditarPeliculas, exact: false, },

  { path: "/", Component: LandingPage, exact: true, },
];
