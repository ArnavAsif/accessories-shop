import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Banner from './Components/Banner/Banner.jsx';
import ProjectsDetails from './Components/ProjectsDetails/ProjectsDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>
      },
      {
        path: "gadget/:gadgetId",
        element: <ProjectsDetails></ProjectsDetails>,
        loader: ()=> fetch('/accessories.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
