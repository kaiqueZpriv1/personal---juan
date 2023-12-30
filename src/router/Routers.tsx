import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../pages/About";
import { Service } from "../pages/Service";
import { Resultado } from "../pages/Resultado";
import { Portfolio } from "../pages/Portfolio";
import { Contato } from "../pages/Contato";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/sobre',
        element: <About/>
    },
    {
        path: '/servico',
        element: <Service/>
    },
    {
        path: '/resultado',
        element: <Resultado/>
    },
    {
        path: '/portfolio',
        element: <Portfolio/>
    },
    {
        path: '/contato',
        element: <Contato/>
    },
])

export const Routers = () => {
    return(
        <RouterProvider router={router} />
    )
}