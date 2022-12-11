import { createBrowserRouter } from "react-router-dom";
import Blogs from "../pages/Blog/Blogs";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
    {
        path:'/',element:<Main></Main>,children:[
            {path:`/`,element:<Home></Home>},
            {path:`/blogs`,element:<Blogs></Blogs>},
        ]
    }
])

export default router;