import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Home from "../../Home/Home";
import Projects from "../../Projects/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            }
        ]
    }
])