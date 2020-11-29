//Layout
import LayoutBasic from "../layouts/LayoutBasic";

//pages
import Home from "../pages/Home";

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
                component: Error404
            }
        ]
    }
]

export default router;