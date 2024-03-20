import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import gif from '../../assets/image/gif.gif'
import instructoricon from '../../assets/image/Instructoricon.png'

const Categories = () => {
  const [category, setCategory] = useState(null);
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.admin786.pnytrainings.com/api/category/${slug}`
        );
        if (response.ok) {
          const {
            category,
            category_courses: courses,
            category_instructors: instructors,
          } = await response.json();
          setCategory(category);
          setCourses(courses);
          setInstructors(instructors);
        } else {
          console.error(`Failed to fetch data for category slug: ${slug}`);
          // setError(`Failed to fetch category data. Please try again later.`);
        }
      } catch (error) {
        console.error(`Error fetching data for category slug: ${slug}:`, error);
        // setError(`Failed to fetch category data. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    // Listen for popstate event
    window.addEventListener('popstate', handlePopState);

    // Remove event listener on cleanup
    return () => window.removeEventListener('popstate', handlePopState);
  }, []); // Empty dependency array means it runs once on mount

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }





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
   
      <div>
       
     
        <div className="main">
          <section className="text-gray-600 body-font bg-[#152438]">
            <div className="container  py-20 mx-auto">
              <div className="flex flex-col text-center w-full">
                <h1 className=" text-white max-sm::text-3xl md:text-4xl  mb-4  font-bold">
                  Courses Offer in  {category.name}
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-white">
                  {category.description_short}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="animated-gradient-div hidden dark:block h-1"></div>

        <section className="text-gray-800 body-font bg-gray-100 dark:bg-slate-800">
  <div className="container px-5 py-12 mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 ml-5 dark:text-white">Featured Courses</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {courses.length > 0 && courses.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden neon-light-box">
          <Link to={`/${item.url_slug}`}>
            <img
              src={item.course_image}
              alt="Course"
              className="w-full h-44 object-cover object-center"
            />
          </Link>
          <div className="p-3">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{item.name}</h2>
            <Link to={`/${item.url_slug}`}>
              <button className="py-2 link-hover">More Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        <section className="text-gray-600 body-font shadow-md bg-gray-100 text-center pt-16">
          <h1 className=" text-black sm:text-3xl text-2xl text-center title-font text-gray-900 mb-5 font-bold">
            Most Popular Instructors in {category.name}
          </h1>
          <div className="container px-5 py-2 mx-auto ml-15">
            <div className="flex flex-wrap -m-4">
              {instructors.length > 0 &&
                instructors.slice(0, 8).map((x) => {
                  return (
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                      <Link className="block relative h-40 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="mx-auto object-cover object-center w-32 block"
                          src={instructoricon}
                        />
                      </Link>
                      <div className="">
                        <h3 className="text-lg tracking-widest title-font text-black font-bold">
                          {x.name}
                        </h3>
                        {/* For teacher Description */}
                        {/* <h2 className="title-font text-xs font-medium text-sm text-justify">{}</h2> */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
