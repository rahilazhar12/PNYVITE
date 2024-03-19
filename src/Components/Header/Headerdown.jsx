import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // Assuming you're using react-router-dom
import PNYlogo from "../../assets/image/PNY Trainings logo.png";

const Searchbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://www.admin786.pnytrainings.com/api/menu")
      .then((response) => response.json())
      .then((data) => {
        setData(data.categories_menu);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [query, setQuery] = useState(""); // default search term
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading

  useEffect(() => {
    if (query.trim().length > 2) {
      setLoading(true); // Start loading
      fetch(
        `https://www.admin786.pnytrainings.com/api/search/${encodeURIComponent(
          query.trim()
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Ensure that data.search_result is an array
          setResults(
            Array.isArray(data.search_result) ? data.search_result : []
          );
          setLoading(false); // Stop loading when the data is received
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setResults([]); // Ensure results is set to an array on error
          setLoading(false); // Stop loading if there is an error
        });
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Logo and categories dropdown */}
        <div className="relative flex flex-col lg:flex-row items-center mb-2 lg:mb-0 space-y-2 md:space-y-0">
          <Link to="/">
            <img src={PNYlogo} alt="PNY Logo" className="w-20" />
          </Link>
          <section className="w-full">
            <div className="group inline-block w-full text-center">
              <button className="outline-none focus:outline-none border px-3 py-5 bg-blue-400 text-white h-[36px] rounded-lg flex items-center justify-center w-52 mx-auto">
                <span className="pr-1 font-semibold flex-1">Categories</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border border-gray-200  rounded-lg shadow-lg transform scale-0 group-hover:scale-100 absolute transition duration-200 ease-in-out 
                sm:mx-auto sm:left-1/2 sm:right-1/2 sm:top-full sm:translate-x-[-50%] sm:min-w-full sm:mt-1"
              >
                {data.map((item) => (
                  <li
                    className="rounded-lg relative px-4 py-2 hover:bg-blue-50"
                    key={item.url_slug}
                  >
                    {/* Main Category Link */}
                    <Link
                      to={
                        item.url_slug ===
                          "google-scholarship-certification-in-lahore-pakistan" ||
                        item.url_slug === "fast-track-pro-bootcamps"
                          ? `/${item.url_slug}`
                          : `/courses/${item.url_slug}`
                      }
                      className="w-full text-left flex items-center outline-none focus:outline-none text-gray-800 hover:text-blue-600"
                    >
                      <span className="pr-2 flex-1 text-sm font-medium">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Search bar */}
        <div className="flex-1 mb-4 lg:mb-0 mx-2">
          <input
            type="search"
            placeholder="Search for the software or skills you want to learn"
            className="w-full p-2 border rounded-md md:max-w-md lg:max-w-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <ul className="results-scrollbar  absolute w-60    md:w-[505px] lg:w-[450px] xl:w-[510px]  mt-1 max-h-96 overflow-y-auto bg-white">
            {loading ? (
              <li className="text-center py-3">Searching...</li>
            ) : results.length > 0 ? (
              results.map((result) => (
                <li
                  key={result.id}
                  className="border-b border-gray-200 px-5 py-3 hover:bg-gray-100"
                >
                  <Link
                    to={`/${result.url_slug}`}
                    className="text-blue-600 z-auto hover:text-blue-800"
                  >
                    {result.name}
                  </Link>
                </li>
              ))
            ) : (
              !loading &&
              query.trim().length > 2 && (
                <li className="text-center py-3">No results found.</li>
              )
            )}
          </ul>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
