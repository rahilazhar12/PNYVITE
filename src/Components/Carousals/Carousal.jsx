import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import gif from '../../assets/image/gif.gif'

export const Homecarousal = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Added loading state
  
    useEffect(() => {
        const fetchcarousalimage = async () => {
            setIsLoading(true); // Set loading to true before fetching data
            try {
                let response = await fetch("https://www.admin786.pnytrainings.com/api/slider");
                const data = await response.json();
                setData(data.sliders);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching data or if an error occurs
            }
        };
        fetchcarousalimage();
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
        <div>
            <Carousel className="h-56 w-full max-sm:h-20 md:h-96">
                {data.map((slider) => (
                    <div key={slider.id} className="w-full h-full">
                        <img
                            className="w-full h-auto sm:h-64 md:h-96"
                            src={slider.image}
                            alt={slider.title}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
