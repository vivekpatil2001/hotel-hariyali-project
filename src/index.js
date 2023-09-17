
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Catering from "./views/Catering/Catering";
import Menu from "./views/Menu/Menu";
import Cards from "./component/Cateringcards/Cards";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />

  },
  {
    path: '/catering',
    element: <Catering />

  },
  {
    path: '/menu',
    element: <Menu />

  }
 
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <RouterProvider router={router}/>
   
  </>
)


