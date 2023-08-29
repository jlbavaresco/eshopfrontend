import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import Home from './componentes/telas/Home'
import Categoria from './componentes/telas/categoria/Categoria'
import Produto from './componentes/telas/produto/Produto'
import NotFound from "./componentes/telas/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "produtos",
        element: <Produto />,
      },
      {
        path: "*",
        element: <NotFound />,
      }       
    ]
  }

]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;