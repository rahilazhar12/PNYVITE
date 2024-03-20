import React, { useState, useEffect } from 'react'
import axios from 'axios';
import parse, { domToReact } from 'html-react-parser';
import { Helmet } from 'react-helmet';
import gif from '../../assets/image/gif.gif'

const Gujranwala = () => {
  const [courses, setCourses] = useState({ page_description: '' });
  const [meta, setMeta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://www.admin786.pnytrainings.com/api/shortcourse/short-courses-in-gujranwala`);
        setCourses(response.data.course);
        setMeta(response.data.metas);


      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
    window.scrollTo(0, 0);
  }, []);

  const parsedDescription = parse(courses.page_description, {
    replace: domNode => {
      if (domNode.type === 'tag') {
        // For example, add a class to all <p> elements
        if (domNode.name === 'p') {
          const props = { className: 'px-32 py-2 max-sm:p-2 text-justify' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h3') {
          const props = { className: 'px-32 py-2 max-sm:p-2 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h2') {
          const props = { className: 'px-32 py-2 max-sm:p-2 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'h1') {
          const props = { className: 'px-32 py-2 max-sm:p-2 text-lg' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === 'ul') {
          const props = { className: 'px-32 py-2 max-sm:p-2' };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        // if (domNode.name === 'a') {
        //   const props = { className: 'bg-[#0c7ec2] text-white hover:bg-red-500 p-3 w-80 cursor-pointer rounded mx-auto'};
        //   return <p {...props}>{domToReact(domNode.children)}</p>;
        // }
      }
    }
  });

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
                <link rel="canonical" href={`http://localhost:3000/short-courses-in-gujranwala`} />
              </Helmet>
            </>
          )
        })
      }



      <section className='lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5'>
        <div className='text-[48px] max-sm:text-[24px] font-semibold'>Gujranwala</div>
        <div className='text-[20px] max-sm:text-[24px] font-semibold'>Short Courses</div>
        {/* <div className='text-[20px] font-normal max-sm:text-[16px] max-sm:text-center'>Learn more about the company and the team behind it.</div> */}
      </section>
      <div className='w-full'>
        <img className='w-full px-32 py-2 max-sm:p-2' src={courses.page_image} alt="" />
      </div>

      {courses.page_description && parsedDescription}
    </>
  )
}

export default Gujranwala
