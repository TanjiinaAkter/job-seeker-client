import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
// import Home from "../../pages/Home/Home";
import Alljobs from "../pages/Alljobs/Alljobs";
import AdminRoute from "./AdminRoute";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import Jobdetail from "../pages/Jobdetail/Jobdetail";
// import Myjobs from "../pages/Myjobs/Myjobs";
// import Appliedjob from "../pages/Appliedjob/Appliedjob";
import Errorpage from "../pages/Errorpage/Errorpage";
import PrivateRouter from "./PrivateRouter";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import AboutUs from "../pages/AboutUs/AboutUs";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import SavedJobs from "../pages/Dashboard/SavedJobs/SavedJobs";
import Addjob from "../pages/Dashboard/Addjob/Addjob";
import Intereview from "../pages/Dashboard/Intereview/Intereview";
import Recommendation from "../pages/Dashboard/Recommendation/Recommendation";
import Appliedjob from "../pages/Dashboard/Appliedjob/Appliedjob";
import UserProfileEdit from "../pages/Dashboard/UserProfileEdit/UserProfileEdit";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Stats from "../pages/Dashboard/Stats/Stats";
import Manageusers from "../pages/Dashboard/Manageusers/Manageusers";
import Managejob from "../pages/Dashboard/Managejob/Managejob";
import Applicants from "../pages/Dashboard/Applicants/Applicants";
import EditJob from "../pages/Dashboard/EditJob/EditJob";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
// import AppliedJobs from "../pages/Dashboard/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  //===========================  HOME    ===============================//
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
        path: "/jobdetail/:id",
        element: (
          <PrivateRouter>
            <Jobdetail></Jobdetail>
          </PrivateRouter>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/alljobs/${params.id}`),
      },
      // {
      //   path: "/appliedjobs",
      //   element: (
      //     <PrivateRouter>
      //       <Appliedjob></Appliedjob>
      //     </PrivateRouter>
      //   ),
      // },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/singleblog/:id",
        element: <SingleBlog></SingleBlog>,
        // loader diye just id ber korechi
        loader: ({ params }) => fetch(`/public/blogs.json/${params.id}`),
      },
    ],
  },

  //===========================  ADMIN DASHBOARD   ===============================//
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      // ==================  ADMIN  SIDEBAR ==================//

      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "adminprofile/:email",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
        // loader: ({ params }) => fetch(`http://localhost:5000/users/${params.email}`),
      },
      {
        path: "stats",
        element: (
          <AdminRoute>
            <Stats></Stats>
          </AdminRoute>
        ),
      },
      {
        path: "addjob",
        element: (
          <AdminRoute>
            <Addjob></Addjob>
          </AdminRoute>
        ),
      },
      {
        path: "managejob",
        element: (
          <AdminRoute>
            <Managejob></Managejob>
          </AdminRoute>
        ),
      },
      {
        path: "applications",
        element: (
          <AdminRoute>
            <Applicants></Applicants>
          </AdminRoute>
        ),
      },
      {
        path: "editjob",
        element: <EditJob></EditJob>,
      },
      {
        path: "manageusers",
        element: <Manageusers></Manageusers>,
      },
      // ==================  USER SIDEBAR ==================//
      {
        path: "userprofile/:email",
        element: <UserProfile></UserProfile>,
        // loader: ({ params }) => fetch(`http://localhost:5000/${params.email}`),
      },
      {
        path: "userprofileedit/:email",
        element: <UserProfileEdit></UserProfileEdit>,
        // ekhane loader dicchi karon er maddhome amra bujhte partesi kon email er route e jabe
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users?email=${params.email}`),
      },
      {
        path: "savedjobs",
        element: (
          <PrivateRouter>
            <SavedJobs></SavedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "recommendation",
        element: <Recommendation></Recommendation>,
      },
      {
        path: "interview",
        element: <Intereview></Intereview>,
      },
      {
        path: "appliedjobs/:email",
        element: <Appliedjob></Appliedjob>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applications?email=${params.email}`),
      },
    ],
  },
]);

export default router;
