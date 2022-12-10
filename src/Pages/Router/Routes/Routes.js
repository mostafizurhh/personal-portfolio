import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import Contact from "../../Contact/Contact";
import Home from "../../Home/Home";
import Resume from "../../Resume/Resume";

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
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])