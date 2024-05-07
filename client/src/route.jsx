import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import LandingPage from './pages/teduhPages/LandingPage';

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/test',
            element: <LandingPage/>
        }
    ]);

    return (
        <>
            {routes}
            <Outlet />
        </>
    )
}