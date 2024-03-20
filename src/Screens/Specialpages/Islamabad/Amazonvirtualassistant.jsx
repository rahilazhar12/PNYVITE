import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse, { domToReact } from "html-react-parser";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import gif from '../../../assets/image/gif.gif'

const Amazonvirtualassistant = () => {
  const { url } = useParams();
  const [data, setData] = useState({});
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdatacitywise = async () => {
      setIsLoading(true);
      try {
        let response = await axios.get(
          `https://www.admin786.pnytrainings.com/api/city/specialpage/${'amazon-virtual-assistant-course-in-islamabad'}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) { }
    };
    fetchdatacitywise();
    window.scrollTo(0, 0);
  }, [url]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('https://www.admin786.pnytrainings.com/api/city/all');
        const data = await response.json();
        // Assuming the data structure is similar to the one you've provided
        setCities(data.cities);
      } catch (error) {
        console.error('Failed to fetch cities:', error);
      }
    };

    fetchCities();
    window.scrollTo(0, 0);
  }, []);

  const parsedDescription = data.special_page
    ? parse(data.special_page.description, {
      replace: (domNode) => {
        let isFirstH2 = true;

        if (domNode.type === "tag") {
          // For example, add a class to all <p> elements
          if (domNode.name === "p") {
            const props = { className: "p-5 dark:text-white text-justify" };
            return <p {...props}>{domToReact(domNode.children)}</p>;
          }
          if (domNode.name === "h3") {
            const props = { className: "p-5 text-lg dark:text-white" };
            return <p {...props}>{domToReact(domNode.children)}</p>;
          }
          if (domNode.name === "ul") {
            const props = { className: "p-5 dark:text-white" };
            return <p {...props}>{domToReact(domNode.children)}</p>;
          }
          if (domNode.name === "h2" && isFirstH2) {
            const props = {
              className: "text-[#013E6D] p-5 font-bold text-4xl dark:text-white",
            };
            isFirstH2 = false; // Update the flag after processing the first h2
            return <h2 {...props}>{domToReact(domNode.children)}</h2>;
          }
        }
      },
    })
    : null;

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
  console.log(data.special_page.meta_title, "radata");

  return (
    <>
      <Helmet>
        <title>{data.special_page.meta_title}</title>
        <meta name="description" content={data.special_page.meta_description} />
        {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
        {/* Add more meta tags as needed */}
        <link rel="canonical" href="http://example.com/path-to-your-page" />
      </Helmet>

      

      <section className="lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5">
        <div className="text-[48px] max-sm:text-[24px] max-sm:text-center font-semibold">
          {data.special_page.name}
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10 max-sm:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {/* Left side: Image and Content */}
          <div className="md:col-span-2 lg:col-span-3">
            <img
              src={data.special_page?.spage_image}
              alt="Content"
              className="w-full max-sm:mt-5"
            />
            <div className="mt-4">
              {data.special_page ? parsedDescription : <p>Loading...</p>}{" "}
              {/* Or an error message */}
            </div>
          </div>

          {/* Right side: Table of Cities */}
          <div className="md:col-span-1 lg:col-span-1 p-4 bg-green-100 h-[500px] max-sm:h-auto rounded-lg max-sm:mb-2">
            <h3 className="font-bold text-lg mb-2 bg-blue-900 text-white p-2 rounded">
              COURSES WE OFFER IN CITIES
            </h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.id} className="hover:bg-green-200">
                  {/* Make the Link fill the entire LI by using block display */}
                  <Link to={`/city/${city.url_slug}`} className="block p-2 mt-3 -m-2">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>
    </>
  );
};

export default Amazonvirtualassistant;
