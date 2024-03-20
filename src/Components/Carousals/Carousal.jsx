import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import gif from '../../assets/image/gif.gif'
import c1 from "../../assets/Collaboration/1.png";
import c2 from "../../assets/Collaboration/2.png";
import c3 from "../../assets/Collaboration/3.png";
import c4 from "../../assets/Collaboration/4.png";
import c5 from "../../assets/Collaboration/5.png";
import c6 from "../../assets/Collaboration/6.png";
import c7 from "../../assets/Collaboration/7.png";
import g1 from "../../assets/image/g1.png";
import g2 from "../../assets/image/g2.png";

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
            <Carousel className="h-56 w-full max-sm:h-20 md:h-96 -z-50">
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


export const Carousalcollaboration = () => {
    return (
      <div>
        <Carousel className="max-sm:h-36  lg:h-80   md:h-56 ">
          <img alt="..." src={c1} />
          <img alt="..." src={c2} />
          <img alt="..." src={c3} />
          <img alt="..." src={c4} />
          <img alt="..." src={c5} />
          <img alt="..." src={c6} />
          <img alt="..." src={c7} />
        </Carousel>
      </div>
    );
  };


  export const CarousalEmpower = () => {
    return (
      <div>
        <Carousel className="max-sm:h-20  lg:h-32  md:h-20  ">
          <img alt="..." src={g1} />
          <img alt="..." src={g2} />
        </Carousel>
      </div>
    );
  };
