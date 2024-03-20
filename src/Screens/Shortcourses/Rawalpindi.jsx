import React, { useState, useEffect } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import gif from '../../assets/image/gif.gif'


const Rawalpindi = () => {
  const [courses, setCourses] = useState('');
  const [meta, setMeta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://www.admin786.pnytrainings.com/api/shortcourse/short-courses-in-rawalpindi`);
        setCourses(response.data.course);
        setMeta(response.data.metas);


      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);



  if (isLoading) {
    return (
      <div className="loader-wrapper">
        {/* Semi-transparent background */}
        <div className="loader-overlay"></div>
        {/* Loader */}
        <div className="loaderContainer">
          {/* Use the gif as a loader */}
          <img className="w-52 h-52" src={gif} alt="Loading..." />
        </div>
      </div>
    );
  }
  return (
    <>
      {
        meta.map((map) => {
          return (
            <>
              <Helmet>
                <title>{map.meta_title}</title>
                <meta name="description" content={map.meta_description} />
                {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
                {/* Add more meta tags as needed */}
                <link rel="canonical" href={`http://localhost:3000/short-courses-in-rawalpindi`} />
              </Helmet>
            </>
          )
        })
      }



      
      <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
        <div className='text-[48px] max-sm:text-[24px] font-semibold'>Rawalpindi</div>
        <div className='text-[20px] max-sm:text-[24px] font-semibold'>Short Courses</div>
        {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div> */}
      </section>
      <div className='w-full '>
        <img className='w-full px-32 py-2 max-sm:p-2' src={courses.page_image} alt="" />
      </div>
      <p className='px-32 py-10 max-sm:p-2 leading-[40px] text-justify'>{courses ? parse(courses.page_description) : <p>Loading...</p>}</p>
    </>
  )
}

export default Rawalpindi