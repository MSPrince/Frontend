import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "remixicon/fonts/remixicon.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';
import CommingSoon from './pages/CommingSoon.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlogPage from './components/SingleBlogPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      // {
      //   path: "*",
      //   element: <CommingSoon/>
      // },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlogPage />,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`),
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
