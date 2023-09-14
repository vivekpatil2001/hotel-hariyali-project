
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Catering from "./views/Catering/Catering";
import Menu from "./views/Menu/Menu";


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

// function App(){
//   const path = window.location.pathname;
//   if (path==="/"){
//     return <HomePage/>
//   }
//   else if(path==="/about"){
//     return <About/>
//   }
//   else if (path==="/contact"){
//   return <Contact/>
// }
// else{
//   return<h1>yah galatpage hai</h1>
// }
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    <RouterProvider router={router}/>
   
  </>
)


