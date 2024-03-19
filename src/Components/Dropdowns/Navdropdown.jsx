import React, { useState } from 'react';
// No need for a separate CSS file as we'll use Tailwind CSS entirely

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none z-50">
        Dropdown
        <svg className={`ml-2 w-4 h-4 transition-transform transform ${isOpen ? '-rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      {isOpen && (
        <div className="dropdown-content absolute bg-white shadow-md mt-2 w-48 rounded z-50">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Link 1</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Link 2</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Link 3</a>
        </div>
      )}
    </div>
  )
}

export default NavDropdown;