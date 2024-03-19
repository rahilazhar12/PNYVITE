import React from "react";
import vector from "../../assets/images/vecter.png";
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
import map from '../../assets/images/noun-pakistan-264183 1.png'
import darkmap from '../../assets/image/darkmap.png'

const Home = () => {
  return (
    <>
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
                <p  className="lgh  dark:text-white">
                  Our Journey to success
                </p>
              </div>

              <div className="PNYTrainingsPakistan  justify-center flex">
                <p className=" lgp max-sm:text-base  md:text-base md:px-3 dark:text-white">
                  The journey shows the entrepreneurial growth of each
                  individual student, with current goals to achieve victory.
                  Through our success, we raise you up to be unstoppable in the
                  world of opportunities.
                </p>
              </div>
              <div className="flex justify-center max-sm:mt-5 max-sm:mb-5">
                <img src={newgroup} className="img-fluid" alt="" />
              </div>
            </div>
          </section>


          <section className="mt-5 lg:mt-10">
  <div className="text-center dark:text-white lgh">We Build Leaders For Professional Work</div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-10 lg:px-20">
    <div>
      <div className="bg-blue-500 rounded-xl text-white px-5 py-10 md:px-10 md:py-20">
        <div className="flex items-center mb-4">
          <i className="fa-solid fa-binoculars fa-fade text-xl mr-3"></i>
          <span className="text-2xl md:text-3xl font-semibold">Our Vision</span>
        </div>
        <p className="text-md md:text-lg leading-7">Our vision is to build a world where every young individual has the skills and knowledge to thrive in the digital age. We aim to be a catalyst for global innovation and socio-economic development.</p>
      </div>

      <div className="bg-red-500 text-white rounded-xl mt-5 px-5 py-10 md:px-10 md:py-20">
        <div className="flex items-center mb-4">
          <i className="fa-solid fa-bullseye fa-fade text-xl mr-3"></i>
          <span className="text-2xl md:text-3xl font-semibold">Our Mission</span>
        </div>
        <p className="text-md md:text-lg leading-7">Our mission is to empower youth through accessible, high-quality digital training and courses. We strive to foster lifelong learning, inspire innovation, and create opportunities for personal and professional growth.</p>
      </div>
    </div>

    <div>
      <img className="block w-full dark:hidden" src={map} alt="Map" />
      <img className="hidden w-full dark:block" src="darkmap-placeholder.jpg" alt="Dark Map" />
    </div>
  </div>
</section>



    </>
  );
};

export default Home;
