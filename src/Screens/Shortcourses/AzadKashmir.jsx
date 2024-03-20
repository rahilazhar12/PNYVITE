import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse, { domToReact } from 'html-react-parser';
import { Helmet } from 'react-helmet';
import gif from '../../assets/image/gif.gif'

const AzadKashmir = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://www.admin786.pnytrainings.com/api/shortcourse/short-courses-in-azad-kashmir`);
        if (response.data && response.data.courses) {
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

  
  const commonStyles = 'px-32 py-2 max-sm:p-2 text-lg';
  
  const styleNode = (node) => {
    if (node.type !== 'tag') return;
  
    let Component;
    switch (node.name) {
      case 'h2':
        Component = <h2 className={`${commonStyles} text-2xl`}>{domToReact(node.children)}</h2>;
        break;
      case 'p':
        Component = <p className={`${commonStyles} text-justify`}>{domToReact(node.children)}</p>;
        break;
      case 'b':
        Component = <strong className={commonStyles}>{domToReact(node.children)}</strong>;
        break;
      case 'h3':
        Component = <h3 className={`${commonStyles} text-xl`}>{domToReact(node.children)}</h3>;
        break;
      // Add more cases for other tags as needed
      default:
        Component = domToReact(node.children);
    }
  
    return Component;
  };
  
  
  

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
    <div>
   
      <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
        <div className='text-[48px] max-sm:text-[24px] font-semibold'>Azad Kashmir</div>
        <div className='text-[20px] max-sm:text-[24px] font-semibold'>Short Courses</div>
        {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div> */}
      </section>
      {courses.map((course, index) => (
        <>
          <Helmet>
            <title>{course.meta_title}</title>
            <meta name="description" content={course.meta_description} />
            {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
            {/* Add more meta tags as needed */}
            <link rel="canonical" href={`http://localhost:3000/short-courses-in-azad-kashmir`} />
          </Helmet>
          <div key={index} className='course-container'>
            <img className='px-32 py-2 max-sm:p-2' src={course.post_image_thumb} alt={course.title} />
            <div>{parse(course.description, { replace: styleNode })}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default AzadKashmir;
