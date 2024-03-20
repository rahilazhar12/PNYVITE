import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import parse, { domToReact } from 'html-react-parser';
import gif from '../../assets/image/gif.gif'

const Sialkotdetails = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://www.admin786.pnytrainings.com/api/shortcourse/short-course-in-sialkot`);
                if (response.data && response.data.courses) {
                    const matchedCourse = response.data.courses.find(c => c.url_slug === slug);
                    console.log(matchedCourse, 'matched__________--')
                    setCourse(matchedCourse);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
        window.scrollTo(0, 0);
    }, [slug]);

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

    if (!course) {
        return <div>No course found</div>;
    }

    const styleNode = (node) => {
        if (node.type === 'tag') {
            switch (node.name) {
                case 'h2':
                    return <h2 className='px-32 py-2 max-sm:p-2  text-lg'>{domToReact(node.children)}</h2>;
                case 'h1':
                    return <h2 className='px-32 py-2 max-sm:p-2  text-lg'>{domToReact(node.children)}</h2>;
                case 'p':
                    return <p className='px-32 py-2 max-sm:p-2 text-justify text-lg'>{domToReact(node.children)}</p>;
                case 'b':
                    return <p className='px-32 py-2 max-sm:p-2  text-lg'>{domToReact(node.children)}</p>;
                case 'h3':
                    return <p className='px-32 py-2 max-sm:p-2  text-lg'>{domToReact(node.children)}</p>;
                case 'li':
                    return <p className='px-32 py-2 max-sm:p-2  text-lg'>{domToReact(node.children)}</p>;
                // Add more cases for other tags as needed
                default:
                    return domToReact(node.children);
            }
        }
    };

    return (
        <div>
            <Helmet>
                <title>{course.meta_title}</title>
                <meta name="description" content={course.meta_description} />
                {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
                {/* Add more meta tags as needed */}
                <link rel="canonical" href={`http://localhost:3000/blog/short-course-in-sialkot/${slug}`} />
            </Helmet>
          


            <img className='px-32 py-2 max-sm:p-2' src={course.post_image_thumb} alt={course.title} />
            {/* <p dangerouslySetInnerHTML={{ __html: course.description }}></p> */}
            <div>{parse(course.description, { replace: styleNode })}</div>
        </div>
    );
}

export default Sialkotdetails;
