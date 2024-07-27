import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import Header from './components/layout/header/Header';

const Router = () => {
    const AppLayout = () => (
        <>
            <Header />
            <Outlet />
        </>
    );
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/employee-list",
                    element: <EmployeeList/>,
                },
                {
                    path: "*",
                    element: <NotFound/>,
                },
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;