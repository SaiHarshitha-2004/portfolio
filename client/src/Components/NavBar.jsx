import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full absolute top-0 left-0 flex justify-center'>
        <nav className="text-white p-4 lg:w-1/2  w-full flex justify-between items-center">
      <div className="flex w-1/3 items-center">
        <button
          onClick={scrollToTop}
          className="text-lg font-semibold hover:text-gray-400"
        >
          Home
        </button>
      </div>
      <div className="flex w-2/3 flex-row  justify-end space-x-8">
        <a
          href="https://www.linkedin.com/in/sai-harshitha-mandapalli-b845a9220/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <CiLinkedin className='w-8 h-8'/>
        </a>
        <a
          href="https://github.com/SaiHarshitha-2004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub className='w-8 h-8' />
        </a>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
