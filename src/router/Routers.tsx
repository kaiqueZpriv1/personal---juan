import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/sobre',
		element: <App />,
	},
	{
		path: '/servico',
		element: <App />,
	},
	{
		path: '/resultado',
		element: <App />,
	},
	{
		path: '/portfolio',
		element: <App />,
	},
	{
		path: '/contato',
		element: <App />,
	},
]);

export const Routers = () => {
	return <RouterProvider router={Router} />;
};
