import { createBrowserRouter } from "react-router-dom";
import ProjectFullInfo from "../components/project-more-info/ProjectFullInfo";
import Blogs from "../pages/Blog/Blogs";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
    {
        path:'/',element:<Main></Main>,children:[
            {path:`/`,element:<Home></Home>},
            {path:`/blogs`,element:<Blogs></Blogs>},
            {path:`/project/:id`,loader: async({params})=> fetch(`https://portfolio-server-seven-alpha.vercel.app/project/${params.id}`),element:<ProjectFullInfo></ProjectFullInfo>},
        ]
    }
])

export default router;