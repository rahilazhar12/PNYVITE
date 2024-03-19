import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import gif from '../../assets/image/gif.gif'


const FeeStructure = () => {
  const [courses, setCourses] = useState({})
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const [selectedDuration, setSelectedDuration] = useState('1');
  const [searchTerm, setSearchTerm] = useState('');
  const [isloading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        let url = '';
        if (searchTerm) {
          url = `https://lms.pnytraining.com/api/searchCourseByName?search=${searchTerm}`;
        } else {
          url = `https://lms.pnytraining.com/api/feeStructure?duration=${selectedDuration}&type=${selectedDuration === '1-year' ? "year" : "month"}`;
        }
        const response = await axios.get(url);
        if (searchTerm) {
          // Aggregate courses from all cities
          const aggregatedCourses = [];
          for (const city in response.data.Courses) {
            aggregatedCourses.push(...response.data.Courses[city]);
          }
          setCourses(aggregatedCourses);
        } else {
          setCourses(response.data.Courses[selectedCity]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
      window.scrollTo(0, 0);
    };


    fetchCourses();
  }, [selectedCity, selectedDuration, searchTerm]);

  //   const filteredCourses = Object.values(courses).flat().filter(course =>
  //     course.Program_Name.toLowerCase().includes(searchTerm.toLowerCase())
  // );



  const parentTabContentSelector = "data-tabs-target"

  if (isloading) {
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

       

        <header className="text-gray-600 body-font shadow-lg">
          <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
              <span className="ml-3 text-sm text-gray-800 dark:text-white">Home</span>
              <svg class="w-2 h-2 text-gray-800 dark:text-white mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
              </svg>
              <span className="ml-3 text-sm text-red-500 dark:text-white">Fee Structure</span>
            </Link>
          </div>
        </header>
        <header className="text-gray-600 body-font bg-[#308AFE]">
          <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
            <p class="text-sm text-white mx-auto leading-relaxed text-base">Note: Registration Fee For 1 Year Duration Diploma Program: 10,000/-Rs  |  Registration Fee For 6 Months Duration Courses: 5000/- Rs  |  Registration Fee For 1 Month to 3 Months Courses: 2000/- Rs</p>
          </div>
        </header>
        <section class="text-gray-600 body-font">
          <div class="container px-4 py-10 mx-auto">
            <div class="lg:w-3/3 flex flex-col sm:flex-row sm:items-center items-start w-full mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-bold text-black dark:text-white">Fee Structure</h1>
              <div>
                <button class="flex-shrink-0  rounded-md text-blue-900 border-blue-500 border-solid border-2 py-2 px-2 focus:outline-none hover:bg-[#308AFF] rounded mt-10 sm:mt-0 mx-3 dark:text-white">Enrol Now (Limited seats left)</button>
                <button class="flex-shrink-0 rounded-md text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Training Schedule</button>
              </div>
            </div>
          </div>
        </section>



        <div className='container'>
          <div data-tabs-toggle={parentTabContentSelector}>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">

              <ul className="flex  flex-wrap text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li role="presentation">

                  <button
                    className={`inline-block p-2 ml-3 border-b-2 rounded-t-lg ${selectedCity === 'Lahore' ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`}
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected={selectedCity === 'Lahore'}
                    onClick={() => setSelectedCity('Lahore')}>
                    Lahore
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className={`inline-block p-2 border-b-2 rounded-t-lg ${selectedCity === 'Rawalpindi' ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`}
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected={selectedCity === 'Rawalpindi'}
                    onClick={() => setSelectedCity('Rawalpindi')}>
                    Rawalpindi
                  </button>
                </li>
                <li className="mr-2" role="presentation">
                  <button
                    className={`inline-block p-2 border-b-2 rounded-t-lg ${selectedCity === 'Multan' ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`}
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected={selectedCity === 'Multan'}
                    onClick={() => setSelectedCity('Multan')}>
                    Multan
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">




              </div>
              {/* <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
              </div> */}


            </div>
          </div>
        </div>

        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col md:flex-row">
            <nav className="flex flex-wrap items-center text-base md:ml-auto me-auto w-full p-3">
              {/* <button type="button" class="text-white bg-[#308AFF] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2">All</button> */}
              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('1')}>1 months</button>

              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('1.5')}>1.5 months</button>


              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('2')}>2 months</button>


              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('3')}>3 months</button>

              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('4')}>4 months</button>





              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('6')}>6 months</button>
              <button type="button" class="text-gray-700 hover:text-white border border-blue-700 hover:bg-[#308AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={() => setSelectedDuration('1-year')}>12 months</button>
              {/* Searchbar */}
              <span><div className="mb-3 mt-2 w-[500px] max-sm:w-auto">
                <div className="relative mb-4 flex  max-sm:w-auto flex-wrap items-stretch">
                  <input
                    type="search"
                    className="block w-full sm:w-auto flex-auto rounded-l border border-solid border-neutral-300 bg-transparent px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />


                </div>
              </div>
              </span>

            </nav>

          </div>
        </header>

        <div className=' grid grid-cols-1 max-sm:overflow-x-auto'>
          {searchTerm ? null :
            <div className='text-center text-2xl font-bold'>
              {selectedCity}
              <span className='ml-5'>
                {selectedDuration === '1-year' ? '12 months' : `${selectedDuration}-Month`}
              </span>
            </div>}


          {isloading ? <p>Loading courses...</p> : courses.length > 0 ? (
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      Serial No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Course Fee
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Registration Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={course.Program_Id}>
                      <td className="px-4 py-3">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {course.Program_Name}
                      </td>
                      <td className="px-6 py-4">
                        {course.Program_Fee}
                      </td>
                      <td className="px-6 py-4">
                        {course.registration_fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          ) : <p>No courses available.</p>}
        </div>




      </div >

    </>
  )
}

export default FeeStructure