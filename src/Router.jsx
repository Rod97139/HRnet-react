import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import EmployeeList from './pages/employee-list/EmployeeList';
import NotFound from './pages/notFound/NotFound';

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