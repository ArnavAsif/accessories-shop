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
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import { ToastContainer} from 'react-toastify';
import Statistics from './Components/Statistics/Statistics.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Login from './Components/LogIn/Login.jsx';
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
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/accessories.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/logIn',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
