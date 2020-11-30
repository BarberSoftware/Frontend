//Layout
import LayoutBasic from "../layouts/LayoutBasic";


//pages
import Home from "../pages/Home";
import Login from "../pages/Login";

//other
import Error404 from "../pages/Error404";

const router = [
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/login",
                component: Login,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default router;