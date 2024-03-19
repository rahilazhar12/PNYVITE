import React, { useEffect, useState } from "react";
import arfatower from "../../assets/image/arfa tower.png";
import iqbaltown from "../../assets/image/iqbal town.png";
import johartown from "../../assets/image/Jahor town.png";
import multan from "../../assets/image/Multan.png";
import rawal from "../../assets/image/rawalpindi.png";
import pnylogonew from "../../assets/image/PNY Trainings logo.png";
import pnylogodark from "../../assets/image/pny logo dark.jpg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();

    const [offeredCourses, setOfferedCourses] = useState([]);
    const [languageCourses, setLanguageCourses] = useState([]);


    const redirectToCity = (cityName) => {
        navigate(`/city/specialpage/${cityName}`);
    };

    useEffect(() => {
        const fetchOfferedCourses = async () => {
            try {
                let response = await fetch('https://www.admin786.pnytrainings.com/api/footer/offeredcourses');
                let data = await response.json();
                // Assuming the data is directly in the format you provided
                setOfferedCourses(data.courses_links);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOfferedCourses();
    }, []);


    useEffect(() => {
        const fetchLanguageCourses = async () => {
            try {
                let response = await fetch('https://www.admin786.pnytrainings.com/api/footer/languagecourses');
                let data = await response.json();
                // Assuming the response data structure is similar to the previous one
                setLanguageCourses(data.courses_links);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLanguageCourses();
    }, []);






    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside className="lg:w-[361px]">
                    <img
                        className="block dark:hidden"
                        src={pnylogonew}
                        alt=""
                        width={159}
                    />
                    <img
                        className="dark:block hidden"
                        src={pnylogodark}
                        alt=""
                        width={159}
                    />
                    <p>
                        {" "}
                        <span className="font-bold">Head Office</span> <br />
                        Office # 1, Level # 14, Arfa Software Technology Park, Ferozepur
                        Road Lahore, Pakistan Phone: 03041111774 Whatsapp: 03201443744
                    </p>
                </aside>
                <nav className="max-sm:text-sm">
                    <header className=" text-black font-bold  dark:text-white">
                        Quick Link
                    </header>
                    <Link to="/faqs" className="hover:text-blue-500">
                        FAQs
                    </Link>
                    <Link to='https://lms.pnytraining.com' className="hover:text-blue-500">Admission</Link>
                    <Link to="/gallery" className="hover:text-blue-500">
                        Gallery
                    </Link>
                    <Link to="/terms-conditions" className="hover:text-blue-500">
                        Terms & Conditions
                    </Link>
                    <Link to="/privacy-policy" className="hover:text-blue-500">
                        Privacy Policy
                    </Link>
                </nav>

                <div >
                    <h1 className="text-black font-bold dark:text-white">Courses Offered</h1>
                    <ul className="space-y-3">
                        {offeredCourses.slice(0, 5).map((course) => (
                            <li key={course.id} className="hover:text-blue-500">
                                <Link to={course.url_slug}>
                                    {course.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
                {/* <nav>
                    <header className="text-black font-bold dark:text-white">
                        Offered Courses
                    </header>
                    <Link className="link link-hover">
                        Meta Social Media Marketing Bootcamp
                    </Link>
                    <Link className="link link-hover">
                        Instagram Marketing Expert Bootcamp
                    </Link>
                    <Link className="link link-hover">
                        Deep Learning and Computer Vision for Python
                    </Link>
                    <Link className="link link-hover">Short Courses in Multan</Link>
                    <Link className="link link-hover">
                        Sketchup bootcamp - Creating interior with SketchUp
                    </Link>
                    <Link className="link link-hover">
                        Bootcamp Advacne UI/UX with Figma
                    </Link>
                    <Link className="link link-hover">Bootcamp - Python</Link>
                </nav> */}

                {/* <nav>
                    <header className="text-black font-bold dark:text-white">
                        Language Courses
                    </header>
                    <Link className="link link-hover">
                        Spoken English Language Course
                    </Link>
                    <Link className="link link-hover">IELTS prepration course</Link>
                    <Link className="link link-hover">Pearson Test of English</Link>
                </nav> */}

                <div>
                    <h1 className="text-black font-bold dark:text-white">Language Courses</h1>
                    <ul className="space-y-2">
                        {languageCourses.map((course) => (
                            <li key={course.id} className="hover:text-blue-500">
                                <Link to={course.url_slug}>
                                    {course.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <nav>
                    <h1 className="text-black font-bold dark:text-white">
                        Short Courses
                    </h1>

                    <div className="flex flex-col space-y-2 ">
                        <Link className="hover:text-blue-500" to="/short-courses-in-lahore">Short courses in Lahore</Link>

                        <Link className="hover:text-blue-500" to="/short-courses-in-rawalpindi">
                            Short courses in Rawalpindi
                        </Link>

                        <Link className="hover:text-blue-500" to="/short-courses-in-karachi">Short courses in Karachi
                        </Link>
                        <Link className="hover:text-blue-500" to="/short-courses-in-faisalabad">
                            Short courses in Faisalabad
                        </Link>
                        <Link className="hover:text-blue-500" to="/short-courses-in-gujranwala">
                            Short courses in Gujranwala
                        </Link>
                        <Link className="hover:text-blue-500" to="/short-courses-in-multan">Short courses in Multan</Link>
                        <Link className="hover:text-blue-500" to="/blog/short-course-in-sialkot">
                            Short courses in Sialkot
                        </Link>
                        <Link className="hover:text-blue-500" to="/short-courses-in-azad-kashmir">
                            Short courses in Azad-Kashmir
                        </Link>
                    </div>
                </nav>
            </footer>

            <div className=" border-b-2 border-blue-600"></div>

            {/* Our Branches--------------------------------------------------------------------------------------------- */}
            <div className=" text-center bg-base-300 text-xl font-semibold p-2">
                Our Branches
            </div>
            <footer className="footer p-10 grid lg:grid-cols-12 md:grid-cols-12 bg-base-200 text-base-content">
                <nav className="col-span-2">
                    <img src={arfatower} alt="" />
                    <header className="text-black dark:text-white font-bold">
                        Arfa Tower (Head Office)
                    </header>
                    <p className="">
                        Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road
                        Lahore
                    </p>
                </nav>
                <nav className="col-span-2">
                    <img src={iqbaltown} alt="" />
                    <header className="text-black font-bold dark:text-white">
                        Iqbal Town
                    </header>

                    743 B Kashmir Block Allama Iqbal Town Lahore

                </nav>
                <nav className="col-span-2 md:col-span-3">
                    <img src={johartown} alt="" />
                    <header className="text-black font-bold dark:text-white">
                        Johar Town
                    </header>

                    1st Floor 256 / A, Block R2 Near Shaukat Khanam Hospital, next to
                    Standard Chartered, Lahore

                </nav>
                <nav className="col-span-2 ">
                    <img src={multan} alt="" />
                    <header className="text-black font-bold dark:text-white">
                        Multan
                    </header>

                    237-B, Model Town, Main Boulevard, Multan

                </nav>
                <nav className="col-span-2 md:col-span-3">
                    <img src={rawal} alt="" />
                    <header className="text-black font-bold dark:text-white">
                        Rawalpindi
                    </header>

                    Plot # 21-D, Talha Heights, 6th Rd, Satellite Town, Rawalpindi

                </nav>
                {/* <nav>
                    <img src={allbrances} alt="" />
                    <header className="text-black font-bold dark:text-white">
                        View All Branches
                    </header>
                    <Link className="link link-hover w-[150px]"> View All Branches</Link>

                </nav> */}
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className="text-xl font-bold dark:text-white ">Courses We Offers in Cities</p>
                    <div>
                        {[
                            "Lahore",
                            "Rawalpindi",
                            "Karachi",
                            "Multan",
                            "Sialkot",
                            "Faisalabad",
                            "Gujranwala",
                            "Azad Kashmir",
                            "Islamabad",
                        ].map((city) => (
                            <button
                                key={city}
                                className="btn btn-link text-black dark:text-white"
                                onClick={() => redirectToCity(city)}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </aside>
            </footer>

            <section className="flex flex-col items-center justify-center gap-4 p-3 mb-10">
                <div className="text-center">
                    Copyright © 2024 - All rights reserved by PNY Trainings
                </div>
                <div className="flex space-x-4">
                    {/* Icons with Links */}
                    <Link to="https://twitter.com/PnyTrainings" target="_blank">
                        <FaTwitter className="text-xl hover:text-blue-500" />
                    </Link>
                    <Link to="https://www.facebook.com/PNY.Trainings" target="_blank">
                        <FaFacebook className="text-xl hover:text-blue-500" />
                    </Link>
                    <Link to="https://pk.linkedin.com/company/pny-trainings" target="_blank">
                        <FaLinkedin className="text-xl hover:text-blue-700" />
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCdkE8Zm_dNclx3B7s-t6pBQ" target="_blank">
                        <FaYoutube className="text-xl hover:text-red-600" />
                    </Link>
                    <Link to="https://www.instagram.com/pny.trainings/" target="_blank">
                        <FaInstagram className="text-xl hover:text-pink-600" />
                    </Link>
                    <Link to="https://www.dmca.com/Protection/Status.aspx?ID=7c917940-1e0d-4855-93f4-76d5632f1b81&refurl=https://www.pnytrainings.com/">
                        <img
                            className=" cursor-pointer h-10"
                            src="https://www.locklizard.com/wp-content/uploads/2023/04/dmca-protected.png"
                            alt=""
                        />
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Footer;
