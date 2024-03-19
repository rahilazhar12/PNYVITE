import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import gif from "../../assets/image/gif.gif";

const Citywisedata = () => {
  const { name } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdatacitywise = async () => {
      setIsLoading(true);
      try {
        let response = await axios.get(
          `https://www.admin786.pnytrainings.com/api/city/${name}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchdatacitywise();
    window.scrollTo(0, 0);
  }, [name]);

  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    // Listen for popstate event
    window.addEventListener("popstate", handlePopState);

    // Remove event listener on cleanup
    return () => window.removeEventListener("popstate", handlePopState);
  }, []); // Empty dependency array means it runs once on mount

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
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
     
      <section className="lg:h-[254px] bg-[#152438;] text-white flex flex-col justify-center items-center max-sm:p-5">
        <div className="text-[48px] max-sm:text-[24px] font-semibold">
          {name}
        </div>
        <div className="text-[20px] font-normal max-sm:text-[16px] max-sm:text-center">
          Best Courses we offer in city.
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-3 p-3 container">
        {data.special_pages && data.special_pages.length > 0 ? (
          data.special_pages.map((item) => {
            return (
              <>
                <div
                  className={`block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ${
                    item.name === "Short Courses in Lahore" ? "h-52" : "h-auto"
                  }`}
                >
                  <a href="#!">
                    {item.name !== "Short Courses in Lahore" && (
                      <img
                        className="rounded-t-lg w-full h-52"
                        src={item.spage_image}
                        alt=""
                      />
                    )}
                  </a>

                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {item.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      {item.description_short}
                    </p>

                    <Link
                      to={
                        item.name === "Short Courses in Lahore"
                          ? item.full_url
                          : `/specialpage/${item.url_slug}`
                      }
                    >
                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
};

export default Citywisedata;
