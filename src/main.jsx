import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Screens/Home/Home.jsx'
import Categories from './Screens/Courses/Coursecategories.jsx'
import Coursedetail from './Screens/Courses/Coursedetails.jsx'
import Specialpage from './Screens/Courses/Specialpage.jsx'
import Citywisedata from './Screens/Courses/Citywisedata.jsx'
import AboutUs from './Screens/About/About.jsx'
import Trainingschedule from './Screens/Schedules/Trainingschedule.jsx'
import FeeStructure from './Screens/Schedules/Feestruchure.jsx'
import Faqs from './Screens/Faqs/Faqs.jsx'
import Blog from './Screens/Blogs/Blog.jsx'
import Blogdetails from './Screens/Blogs/Blogdetails.jsx'
import Contactus from './Screens/Contact/Contactus.jsx'
import Flyers from './Screens/Flyers/Flyers.jsx'
import FlyerModal from './Screens/Flyers/Flyermodal.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {path: "",element: <Home/>} , 
      {path: "about-us",element: <AboutUs/>} , 
      {path: "courses/:slug",element: <Categories/>} , 
      {path: "city/specialpage/:name",element: <Citywisedata/>},
      {path: ":courseSlug",element: <Coursedetail/>} , 
      {path: "specialpage/:url",element: <Specialpage/>},
      {path: "training-schedule",element: <Trainingschedule/>},
      {path: "pny-training-fee-structure",element: <FeeStructure/>},
      {path: "faqs",element: <Faqs/>},
      {path: "blog",element: <Blog/>},
      {path: "blog/marketing/:slug",element: <Blogdetails/>},
      {path: "contact-us",element: <Contactus/>},
      {path: "flyers",element: <Flyers/>},
      {path: "modalflyer",element: <FlyerModal/>},
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
