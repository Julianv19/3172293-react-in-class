import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/shared";
import { UserListPage, UserRegisterForm } from "../features/users";
import HomePage from "../features/home/pages/HomePage"
import Login from "../features/auth/components/Login"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children:[
            {
                index:true,
            },
        ],
    },
    {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
        { index: true, element: <h1>Hello1</h1> },
        { path: "user", element: <UserListPage/> },  
        { path: "register", element: <UserRegisterForm/> }, 
        { path: "home", element: <HomePage/> }, 
        { path: "login", element: <Login/> }, 
    ],
},
    {
     path: "/home",
    element: <HomePage/>,
    children: [
        { index: true},
        
    ],
},
    //  {
    //      path: "/inventary",
    //      element: <UserCreateInventary/>,
    //      children: [
    //           {index: true, element: <h1>Hello1</h1>},
    //           {path: "/dashboard/auth", element: <h1>Hello2</h1>},
    //           {path: "/dashboard/userList", element: <h1>Hello3</h1>},
    //      ],
    //  },
]);

export default router;
