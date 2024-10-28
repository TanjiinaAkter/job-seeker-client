import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
// import Home from "../../pages/Home/Home";
import Alljobs from "../pages/Alljobs/Alljobs";
import Addjob from "../pages/Addjob/Addjob";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import Jobdetail from "../pages/Jobdetail/Jobdetail";
import Myjobs from "../pages/Myjobs/Myjobs";
import Appliedjob from "../pages/Appliedjob/Appliedjob";
import Errorpage from "../pages/Errorpage/Errorpage";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alljobs",
        element: <Alljobs></Alljobs>,
      },
      {
        path: "/addjob",
        element: (
          <PrivateRouter>
            <Addjob></Addjob>
          </PrivateRouter>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRouter>
            <Myjobs></Myjobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/jobdetail",
        element:<PrivateRouter><Jobdetail></Jobdetail></PrivateRouter>,
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRouter>
           
            <Appliedjob></Appliedjob>
          </PrivateRouter>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
