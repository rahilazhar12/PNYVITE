import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Pearsontest from './Screens/Specialpages/Islamabad/Pearsonest.jsx'
import Digitalmarketing from './Screens/Specialpages/Islamabad/Digitalmarketing.jsx'
import AdobePremierePro from './Screens/Specialpages/Islamabad/AdobePremierePro.jsx'
import EthicalHacking from './Screens/Specialpages/Islamabad/EthicalHacking.jsx'
import IELTSCourse from './Screens/Specialpages/Islamabad/IELTSCourse.jsx'
import Socialmediamarketing from './Screens/Specialpages/Islamabad/Socialmediamarketing.jsx'
import Wordpresscourse from './Screens/Specialpages/Islamabad/Wordpresscourse.jsx'
import Amazonvirtualassistant from './Screens/Specialpages/Islamabad/Amazonvirtualassistant.jsx'
import NASTP from './Screens/Specialpages/Islamabad/NASTP.jsx'
import BestITInstitute from './Screens/Specialpages/Islamabad/BestITInstitute.jsx'
import Androidcourse from './Screens/Specialpages/Islamabad/Androidcourse.jsx'
import SEOCourse from './Screens/Specialpages/Islamabad/SEOCourse.jsx'
import BestITDiplomas from './Screens/Specialpages/Islamabad/BestITDiplomas.jsx'
import WebDevelopment from './Screens/Specialpages/Islamabad/WebDevelopment.jsx'
import PearsonTest from './Screens/Specialpages/Rawalpindi/PearsonTest.jsx'
import Adobepremiere from './Screens/Specialpages/Rawalpindi/Adobepremiere.jsx'
import Freelancingcourse from './Screens/Specialpages/Rawalpindi/Freelancingcourse.jsx'
import SpokenEnglish from './Screens/Specialpages/Rawalpindi/SpokenEnglish.jsx'
import YouTubeCourse from './Screens/Specialpages/Rawalpindi/YouTubeCourse.jsx'
import Webdevelopmentcourse from './Screens/Specialpages/Rawalpindi/Webdevelopmentcourse.jsx'
import GraphicDesigning from './Screens/Specialpages/Rawalpindi/GraphicDesigning.jsx'
import EmpowringProfessional from './Screens/Specialpages/Multan/EmpowringProfessional.jsx'
import PITB from './Screens/Specialpages/Lahore/PITB.jsx'
import Amazondropshipping from './Screens/Specialpages/Lahore/Amazondropshipping.jsx'
import Fastbootcamp from './Screens/Bootcamps/Fastbootcamp.jsx'
import Lahore from './Screens/Shortcourses/Lahore.jsx'
import Multan from './Screens/Shortcourses/Multan.jsx'
import Rawalpindi from './Screens/Shortcourses/Rawalpindi.jsx'
import Karachi from './Screens/Shortcourses/Karachi.jsx'
import Faislabad from './Screens/Shortcourses/Faisalabad.jsx'
import Gujranwala from './Screens/Shortcourses/Gujranwala.jsx'
import Azadkashmir from './Screens/Shortcourses/AzadKashmir.jsx'
import Sialkot from './Screens/Shortcourses/Sialkotblogpage/Sialkot.jsx'
import Sialkotdetails from './Screens/Shortcourses/Sialkotdetails.jsx'
import AllCourses from './Screens/Courses/Allcourses.jsx'



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
      {path: "allcourses",element: <AllCourses/>} , 
      {path: "specialpage/:url",element: <Specialpage/>},
      {path: "training-schedule",element: <Trainingschedule/>},
      {path: "pny-training-fee-structure",element: <FeeStructure/>},
      {path: "faqs",element: <Faqs/>},
      {path: "blog",element: <Blog/>},
      {path: "blog/marketing/:slug",element: <Blogdetails/>},
      {path: "contact-us",element: <Contactus/>},
      {path: "flyers",element: <Flyers/>},
      {path: "modalflyer",element: <FlyerModal/>},

      // Bootcamp
      {path: "fast-track-pro-bootcamps",element: <Fastbootcamp/>},

      // Special Pages Islamabad
      {path: "pearson-english-test-course-in-islamabad",element: <Pearsontest/>},
      {path: "digital-marketing-course-in-islamabad",element: <Digitalmarketing/>},
      {path: "adobe-premiere-pro-course-in-islamabad",element: <AdobePremierePro/>},
      {path: "ethical-hacking-course-in-islamabad",element: <EthicalHacking/>},
      {path: "ielts-course-in-islamabad",element: <IELTSCourse/>},
      {path: "social-media-marketing-course-in-islamabad",element: <Socialmediamarketing/>},
      {path: "wordpress-course-in-islamabad",element: <Wordpresscourse/>},
      {path: "amazon-virtual-assistant-course-in-islamabad",element: <Amazonvirtualassistant/>},
      {path: "short-courses-in-nastp",element: <NASTP/>},
      {path: "best-it-institute-in-islamabad",element: <BestITInstitute/>},
      {path: "android-development-course-in-islamabad",element: <Androidcourse/>},
      {path: "seo-course-in-islamabad",element: <SEOCourse/>},
      {path: "it-diplomas-in-islamabad",element: <BestITDiplomas/>},
      {path: "web-development-course-in-islamabad",element: <WebDevelopment/>},

      // Rawalpindi
      {path: "pearson-english-test-in-rawalpindi",element: <PearsonTest/>},
      {path: "adobe-premiere-pro-course-in-rawalpindi",element: <Adobepremiere/>},
      {path: "freelancing-course-in-rawalpindi",element: <Freelancingcourse/>},
      {path: "spoken-english-course-in-rawalpindi",element: <SpokenEnglish/>},
      {path: "youtube-course-in-rawalpindi",element: <YouTubeCourse/>},
      {path: "web-development-course-in-rawalpindi",element: <Webdevelopmentcourse/>},
      {path: "graphic-designing-courses-in-rawalpindi",element: <GraphicDesigning/>},

      // Multan
      {path: "pny-trainings-in-multan-empowring-professional-skills",element: <EmpowringProfessional/>},

      // Lahore
      {path: "pitb-supporting-entrepreneurships-programs-in-punjab",element: <PITB/>},
      {path: "amazon-dropshipping-training-course-in-lahore-pakistan",element: <Amazondropshipping/>},


      // Shotcourses
      {path: "short-courses-in-lahore", element: <Lahore/>},
      {path: "short-courses-in-multan", element: <Multan/>},
      {path: "short-courses-in-rawalpindi", element: <Rawalpindi/>},
      {path: "short-courses-in-karachi", element: <Karachi/>},
      {path: "short-courses-in-faisalabad", element: <Faislabad/>},
      {path: "short-courses-in-gujranwala", element: <Gujranwala/>},
      {path: "short-courses-in-azad-kashmir", element: <Azadkashmir/>},
      {path: "blog/short-course-in-sialkot", element: <Sialkot/>},
      {path: "/blog/short-course-in-sialkot/:slug", element: <Sialkotdetails/>},



      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
