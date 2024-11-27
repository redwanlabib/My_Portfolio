import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import AboutPage from "../Pages/AboutPage/About";
import CoursesPage from "../Pages/CoursesPage/Courses";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ContactPage from "../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <AboutPage/>,
      },
      {
        path: "Courses",
        element: <CoursesPage/>,
      },
      {
        path: "BlogPage",
        element: <BlogPage/>,
      },
      {
        path: "ContactPage",
        element: <ContactPage/>,
      },
    ],
  },
]);

export default router;