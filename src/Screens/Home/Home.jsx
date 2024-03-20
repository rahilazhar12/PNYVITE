import React, { useState, useEffect } from "react";
import vector from "../../assets/images/vecter.png";
import { Link } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaAward,
  FaBuilding,
  FaUniversity,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";
import { Homecarousal } from "../../Components/Carousals/Carousal";
import newgroup from "../../assets/images/newgroup.png";
import map from "../../assets/images/noun-pakistan-264183 1.png";
import darkmap from "../../assets/image/darkmap.png";
import contentimage from "../../assets/image/Why choose Us.png";
import { durationdata } from "../../Components/Data/Data";
import icon from "../../assets/images/Featured icon.svg";
import { ownersdata } from "../../Components/Data/Data";
import frame from "../../assets/image/Frame 624.png";
import { Carousalcollaboration } from "../../Components/Carousals/Carousal";
import frame2 from "../../assets/image/Frame 61.png";
import parse, { domToReact } from "html-react-parser";
import { CarousalEmpower } from "../../Components/Carousals/Carousal";
import Talktochatbot from '../../Components/Chatbot/Talktobot'
import off from "../../assets/image/10off.jpg";
import toast, { Toaster } from "react-hot-toast";



const Home = () => {
  const handleClose = () => setOpen(false);
  

  const [data, setData] = useState([]);
  const [home, setHome] = useState([]);
  const [open, setOpen] = useState(false);
  const [id_address, setId_address] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = sessionStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      // If not, show the modal
      setOpen(true);
      // Delay setting the flag in sessionStorage by 3 seconds
      setTimeout(() => {
        sessionStorage.setItem("hasSeenModal", "true");
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      // If they have, don't show the modal
      setOpen(false);
    }
  

    // Fetch data from the provided URL
    fetch("https://www.admin786.pnytrainings.com/api/get-courses")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false in case of error
      });

    // Function to clear localStorage on page unload
    const handleBeforeUnload = () => {
      localStorage.removeItem("hasSeenModal");
    };

    // Add an event listener to clear local storage on page refresh
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://www.admin786.pnytrainings.com/api/pages/home_page_content")
      .then((response) => response.json())
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const parsedDescription = home.page
  ? parse(home.page.page_description || "", {
    replace: (domNode) => {
      if (domNode.type === "tag") {
        // For example, add a class to all <p> elements
        if (domNode.name === "p") {
          const props = { className: "p-5" };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === "h3") {
          const props = { className: "p-5 text-lg" };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
        if (domNode.name === "ul") {
          const props = { className: "p-5" };
          return <p {...props}>{domToReact(domNode.children)}</p>;
        }
      }
    },
  })
  : null;

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (


      <div
        className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto max-sm:p-3  w-full"
        id="my-modal"
      >
        <div className="relative top-32 mx-auto  border max-sm:w-auto max-sm:h-auto w-[500px] h-[342px] shadow-lg  bg-white">
          <div className="text-center">
            <div className=" bg-blue-500  bg-gradient-to-t from-[#0b356b] to-[#2b7feb] p-3 text-white">
              Subscribe PNY Trainings Official Newsletters
            </div>

            <div className="flex max-sm:flex-col">
              <div className=" w-1/2 py-3 max-sm:w-auto max-sm:order-1">
                <div>
                  <div className=" font-semibold px-3">
                    Refer a Friends & you will both receive 10% off on all
                    course at PNY Trainings.
                  </div>
                  <form>
                    <div className=" flex flex-col p-3 space-y-3">
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="p-1 bg-[#f5f5f5] shadow-md rounded border-none  outline-none"
                      />
                      <input
                        type="text"
                        id="phone"
                        placeholder="Contact"
                        className="p-1 bg-[#f5f5f5] shadow-md rounded border-none  outline-none"
                      />
                      <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        className="p-1 bg-[#f5f5f5] shadow-md rounded border-none  outline-none"
                      />
                      <button
                        type="button"
                        className=" bg-[#308aff] rounded py-1 px-3 text-white mt-5"
                        onClick={SubmitData}
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className=" w-1/2 p-3 justify-center flex max-sm:w-auto">
                <img src={off} alt="" />
              </div>
            </div>

            <div className="items-center px-4 py-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-white text-blue-500 rounded-md focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setId_address(data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  function SubmitData() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var formData = new FormData();

    // Append the data to the FormData object
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("id_address", id_address);
    // formData.append('comment', comment);

    // Use fetch to send the request
    fetch("https://www.admin786.pnytrainings.com/api/newsletter", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success(data.message, {
          duration: 5000,
        });
        setOpen(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  

  return (
    <>
    <Talktochatbot/>
    <div className="App">
        <Modal isOpen={open} />
      </div>
      {/* Carousal-1 */}
      <Homecarousal />



      {/* Section-2 */}
      <div className="container mx-auto p-4 flex md:flex-col flex-col lg:flex-row xl:flex-row 2xl:flex-row md:items-center">
        <div className=" flex-1 max-sm:order-1 px-2  max-sm:text-center md:text-center lg:text-center xl:text-start 2xl:text-start max-sm:p-3">
          <h1
            style={{ animation: "riseUp 2s ease-out forwards" }}
            className="text-xl dark:text-white text-center font-bold md:text-7xl max-sm:text-[36px]"
          >
            <span className="text-[#F10900] ">PNY</span> Trainings
          </h1>

          <p className="mt-2 dark:text-white md:text-[48px] w-[400px] text-[20px] md:w-auto max-sm:w-auto font-semibold text-center">
            Pakistan's <span className="text-[#F10900]">No.1</span> IT Training
            Institute
          </p>

          <p className="mt-1 dark:text-white text-center text-sm md:text-base md:w-auto w-[400px] max-sm:w-auto">
            Certified Courses with Money Making Skills! Empower Yourself with
            Practical Skills that Open Doors to Lucrative Opportunities
          </p>
        </div>
      </div>

      {/* Section-3 */}
      <section
        className="bg-blue-100 flex items-center justify-center py-20 lg:py-28 md:py-24"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-black dark:text-white mb-6 lg:mb-8 outline-text">
            Admissions are now open for the fresh batch.
          </h2>
          <p className="text-lg lg:text-xl text-center text-gray-800 dark:text-gray-200 mb-8">
            Let's embark on a journey of growth together!
          </p>
          <div className="flex justify-center">
            <a
              href="https://lms.pnytraining.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Join us now
            </a>
          </div>
        </div>
      </section>

      {/* Section-4 */}
      <section className="bg-gray-100 text-center py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="lgh mb-5">
            We Develop Your Inspiring Career with Standard
          </h2>
          <p className="text-lg md:text-xl mb-8 mx-auto md:w-3/4 lg:w-full text-gray-800 dark:text-gray-300">
            PNY Trainings Pakistan is the leading IT training institute,
            offering 100+ courses through online and physical classes. We
            provide internship opportunities and have a dedicated job cell to
            help you jumpstart your career.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaGlobeAmericas className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                International Collaborations
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaAward className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                Awarded by USA Education 2.0
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaBuilding className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                Multiple Branches in Pakistan
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaUniversity className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                Affiliated with Govt. (PSDA & PBTE)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                75000+ Alumni
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaBook className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                100+ Professional Programs
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaChalkboardTeacher className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                150+ Instructors
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-4xl mb-2 text-blue-500" />
              <span className="font-semibold dark:text-black">
                80+ MoU's Sign
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section-5 */}
      <section className=" max-sm:mt-8 ">
        <div className="grid md:p-5 lg:space-y-5">
          <div className=" flex justify-center">
            <p className="lgh  dark:text-white">Our Journey to success</p>
          </div>

          <div className="PNYTrainingsPakistan  justify-center flex">
            <p className=" lgp max-sm:text-base  md:text-base md:px-3 dark:text-white">
              The journey shows the entrepreneurial growth of each individual
              student, with current goals to achieve victory. Through our
              success, we raise you up to be unstoppable in the world of
              opportunities.
            </p>
          </div>
          <div className="flex justify-center max-sm:mt-5 max-sm:mb-5">
            <img src={newgroup} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
      {/* Section-6 */}
      <section className="mt-5 lg:mt-10">
        <div className="text-center dark:text-white lgh">
          We Build Leaders For Professional Work
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-10 lg:px-20">
          <div>
            <div className="bg-blue-500 rounded-xl text-white px-5 py-10 md:px-10 md:py-20">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-binoculars fa-fade text-xl mr-3"></i>
                <span className="text-2xl md:text-3xl font-semibold">
                  Our Vision
                </span>
              </div>
              <p className="text-md md:text-lg leading-7">
                Our vision is to build a world where every young individual has
                the skills and knowledge to thrive in the digital age. We aim to
                be a catalyst for global innovation and socio-economic
                development.
              </p>
            </div>

            <div className="bg-red-500 text-white rounded-xl mt-5 px-5 py-10 md:px-10 md:py-20">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-bullseye fa-fade text-xl mr-3"></i>
                <span className="text-2xl md:text-3xl font-semibold">
                  Our Mission
                </span>
              </div>
              <p className="text-md md:text-lg leading-7">
                Our mission is to empower youth through accessible, high-quality
                digital training and courses. We strive to foster lifelong
                learning, inspire innovation, and create opportunities for
                personal and professional growth.
              </p>
            </div>
          </div>

          <div>
            <img className="block w-full dark:hidden" src={map} alt="Map" />
            <img
              className="hidden w-full dark:block"
              src={darkmap}
              alt="Dark Map"
            />
          </div>
        </div>
      </section>

      {/* Section-7 */}
      <section
        id="duration"
        className="bg-blue-500 p-10 text-white md:p-5 lg:p-20"
      >
        <div className="grid justify-center lg:gap-y-5">
          <div className="lgh text-center lg:row-span-1 max-sm:py-5">
            Professional Development Timeframe
          </div>
          <div className=" lgp lg:row-span-1 max-sm:px-5 max-sm:mb-5">
            Unlock your potential with our comprehensive range of skill
            programs! Choose from 1-year diploma programs, 6-month certified
            courses, 3-2 month certified courses, and professional boot camps.
            Upgrade your skills today!
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-4">
          {durationdata.map((data, index) => (
            <div key={index} className="bg-blue-400 text-white p-4">
              <div className="text-center text-xl font-bold">{data.title}</div>
              <div className="text-center">{data.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* section-8 */}
      <section className="py-8">
        <div className="startlearning lg:mt-8 lgh mb-6 max-sm:mt-7 md:mt-6 dark:text-white">
          <p>Course Categories</p>
        </div>

        {isLoading ? ( // Display loading state while data is being fetched
          <div className="text-center font-bold text-2xl text-blue-500">
            Loading...
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 lg:px-20 max-sm:px-3.5 py-3 max-sm:py-2 max-sm:grid-cols-4 lg:gap-4 max-sm:space-y-2 md:grid-cols-12 md:p-3 gap-1">
            {data.slice(0, 6).map((item, index) => (
              <div key={index} className="col-span-4">
                <div className="mainbox lg:h-96 xl:h-80 md:h-80 bg-gray-100 p-5 space-y-2 rounded">
                  <div className="img">
                    <img src={icon} alt="" />
                  </div>
                  <div className="development lg:text-2xl font-semibold dark:text-black font-Inter">
                    {item.name}
                  </div>
                  <div className="paragraph dark:text-black">
                    {item.obj.length > 0 && item.obj[0].description_short}
                  </div>
                  <div>
                    <Link
                      to={`/courses/${item.url_slug}`}
                      target="_blank"
                      className="text-blue-500 font-semibold"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="viewmore flex justify-center p-5">
          <Link to="/allcourses">
            <button className="font-semibold text-base w-28 h-12 text-blue-600 bg-gray-200 rounded-lg">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Section-9 */}
      <section className="bg-gray-50 md:p-5">
        <div className="grid grid-cols-12 gap-5 max-sm:grid-cols-6">
          <div className="col-span-6 max-sm:col-span-6 lg:col-span-6 lg:px-10 py-10 max-sm:order-1">
            <div className="whychooseus text-4xl font-bold max-sm:text-center dark:text-black max-sm:text-2xl">
              Why Choose US?
            </div>

            <ul className="p-5 space-y-5 text-lg max-sm:text-sm">
              {[
                "Money Making Skills",
                "Hands on Experience during Training",
                "Internship & Job Opportunities",
                "On-campus & Online Classes with Recorded Lectures",
                "Highly Experienced Instructors",
                "Professional Learning Environment",
                "Learning Management System",
              ].map((item, index) => (
                <li
                  key={index}
                  className="dark:text-black flex items-center space-x-2"
                >
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a.25.25 0 00-.334.093l-3.35 5.026-2.285-2.286a.25.25 0 00-.427.177v8.572a.25.25 0 00.25.25h4.572a.25.25 0 00.25-.25V6.494l2.465 2.466a.25.25 0 00.427-.177l3.7-5.55a.25.25 0 00-.093-.334l-1.333-.888a.25.25 0 00-.334.093l-2.84 4.26-2.286-2.286a.25.25 0 00-.427.177v7.572a.25.25 0 00.25.25h4.572a.25.25 0 00.25-.25V6.494l2.465 2.466a.25.25 0 00.427-.177l3.7-5.55a.25.25 0 00-.093-.334l-1.333-.888a.25.25 0 00-.334.093L12.25 7.61 9.535 4.897a.25.25 0 00-.334-.093z"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6">
            <div className="flex justify-center lg:p-6 lg:mt-20">
              <img
                className="w-full relative md:bottom-28"
                src={contentimage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* section-10 */}
      <section className="flex justify-center items-center flex-col p-3 space-y-3">
        <div className="lgh dark:text-white">Leaders of Youth</div>
        <div className="lgp dark:text-white">
          PNY Trainings' CEO and Director are visionary leaders, inspiring youth
          on a transformative journey toward a promising future, making a path
          to success and prosperity.
        </div>
      </section>
      <div className="flex  justify-center p-5 max-sm:p-4">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          {ownersdata.map((items, index) => (
            <div
              key={index}
              className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <a href="#!">
                <img className="p-3" src={items.image} alt="" />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {items.name}
                </h5>
                <p className="mb-4 text-base text-blue-500 dark:text-neutral-200">
                  {items.designation}
                </p>
                <p className="mb-4 text-base text-blue-500 dark:text-neutral-200">
                  {/* {items.twitter} <span className='ml-5'>{items.linkdin}</span> */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section-11 */}
      <section className="lg:p-10">
            <div className="grid justify-center">
              <div className=" lgh lg:p-2 max-sm:mt-5  dark:text-white">
                Our Affiliations
              </div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">
                We proudly affiliate with Government organizations to bring
                high-quality digital skills that empower today's youth for
                tomorrow's opportunities.
              </div>

              <div className="imageaffiliation flex justify-center max-sm:p-2 md:py-5">
                <img src={frame} alt="" />
              </div>

            </div>
          </section>

          {/* Section-12 */}
          <section className="bg-[#F9FAFB] h-auto">
            <div className="grid justify-center lg:p-10">
              <div className=" lgh  dark:text-black max-sm:mt-10 ">
                Our Collaborations
              </div>
              <div className=" lgp max-sm:p-3 md:px-10 md:py-2 dark:text-black">
                Discover the strength of our network as we join hands with key
                partners to innovate and create impactful digital learning
                experiences for today's youth.
              </div>

              <div className="carousal md:px-5 max-sm:px-4">
                <Carousalcollaboration />
              </div>
            </div>
          </section>


          {/* Section-13 */}
          <section>
            <div
              id="trainer"
              className="grid space-y-3 max-sm:p-6 lg:px-48 lg:py-10 bg-[#F9FAFB] text-justify md:p-5"
            >
              <div className="grid">
                <div className="lgh dark:text-black">
                  Our trainers certified from
                </div>
                <div className="imageaffiliation flex justify-center max-sm:p-2 lg:py-10 md:px-5 ">
                  <img src={frame2} alt="" />
                </div>
              </div>
              <div className="dark:text-black">{parsedDescription}</div>
              
            </div>
          </section>


          {/* Section-14 */}
          <section>
            <div className="grid justify-center lg:mt-10">
              <div className="lgh dark:text-white max-sm:mt-5">
                We Empower Professionals; see through Media Partner Networks
              </div>
              <div className="lgp max-sm:p-3 md:px-10 md:py-2 dark:text-white">
                PNY Trainings encourage the opinions of youth by developing them
                professionally, trusting their abilities as leaders, and getting
                them excited to explore the world around them.
              </div>


              <div className="carousal p-5 ">
                <CarousalEmpower />
              </div>
            </div>
          </section>
          <Toaster />
    </>
  );
};

export default Home;
