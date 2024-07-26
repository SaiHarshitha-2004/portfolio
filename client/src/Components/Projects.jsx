import React, { useState } from 'react';
import aura from "../Images/aura.png"; 
import dashboard from "../Images/dashboard.png";
import sehari from "../Images/sehari.png";
import rps from "../Images/rps.png";
import xo from "../Images/xo.png";
import guess from "../Images/guess.png";
import travel from "../Images/travel.png";
import anits from "../Images/anits.png";

const WebCard = ({ title, content, img, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="relative flex shadow-md rounded-xl shadow-gray-600 transition-transform duration-300 transform hover:scale-105 flex-col grow jc items-center pt-8 pb-16 w-full text-base text-white bg-black bg-opacity-30 max-md:mt-10 hover:bg-black/45 group">
        <img
          loading="lazy"
          srcSet={img}
          className="aspect-[1.56] rounded-xl w-[198px] transition-transform duration-300 transform hover:scale-110"
        />
        <div className="mt-8">{title}</div>
        <div className='text-sm w-2/3 mt-5 text-center text-gray-400'>{content}</div>
        <div className="absolute -rotate-45 left-4 bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-red-500 text-4xl">&#8594;</div> {/* Red arrow */}
        </div>
      </div>
    </a>
  )
}

const JavaCard = ({ title , img }) => {
  return (
      <div className="relative flex shadow-md rounded-xl shadow-gray-600 transition-transform duration-300 transform hover:scale-105 flex-col grow items-center pt-8 pb-8 w-full text-base text-white bg-black bg-opacity-30 max-md:mt-10 hover:bg-black/45 group">
        <img
          loading="lazy"
          srcSet={img}
          className="aspect-[1.56] rounded-xl w-[260px] transition-transform duration-300 transform hover:scale-110"
        />
        <div className="mt-8">{title}</div>
      </div>
  )
}


const Projects = () => {
  const [activeTab, setActiveTab] = useState('mern');
  const url1 = `https://www.figma.com/proto/1FxWy8VR5Jxb7F5GVa285q/TRIPHUB?node-id=0-1&t=6twleFUbkARedJFP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2`;
  const url2 = `https://www.figma.com/proto/MhTkZXAw1grskuUnRptCLW/Sai-Harshitha-%26-Divya-Sree?node-id=1-2&t=qKwqG5u4SxBzbuiQ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2`



  const renderContent = () => {
    switch (activeTab) {
      case 'mern':
        return (
          <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-12 justify-center max-md:flex-col">
              <WebCard title="Aura" content="A platform for searching and posting articles across various trends, offering users the ability to explore and interact with content." img={aura} url="https://mern-blog-frontend-gold-pi.vercel.app/" />
              <WebCard title="Sehari" content="An application for finding and exploring different types of wedding halls and events, with a user-friendly interface." img={sehari} url="https://sehari-client.vercel.app/" />
              <WebCard title="dashboard" content="A sample business dashboard created with React, showcasing core functionalities for managing and visualizing business data." img={dashboard} url="https://harshitha-react-dashboard-a2b3c4.netlify.app/" />
            </div>
          </div>
        );
      case 'java':
        return (
          <div className='flex flex-col'>
            <div className="flex gap-12 justify-center max-md:flex-col">
              <JavaCard title="Rock paper scissor game" img={rps} />
              <JavaCard title="Number Guessing game" img={guess} />
              <JavaCard title="Xo game" img={xo} />
            </div>
          </div>
        );
      case 'figma':
        return (
          <div className='flex flex-col'>
            <div className="flex gap-12 justify-center max-md:flex-col">
             <a href={url1} target="_blank" rel="noopener noreferrer" className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="relative flex shadow-md rounded-xl shadow-gray-600 transition-transform duration-300 transform hover:scale-105 flex-col grow items-center pb-8 w-full text-base text-white bg-black bg-opacity-30 max-md:mt-10 hover:bg-black/45 group">
                <img
                  loading="lazy"
                  srcSet={travel}
                  className="aspect-[1.56] rounded-xl w-[260px] transition-transform duration-300 transform hover:scale-110"
                />
                <div className="mt-4">TravelHub</div>
              </div>
              </a>
              <a href={url2} target="_blank" rel="noopener noreferrer" className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="relative flex shadow-md rounded-xl shadow-gray-600 transition-transform duration-300 transform hover:scale-105 flex-col grow items-center pb-8 w-full text-base text-white bg-black bg-opacity-30 max-md:mt-10 hover:bg-black/45 group">
                <img
                  loading="lazy"
                  srcSet={anits}
                  className="aspect-[1.56] rounded-xl w-[260px] transition-transform duration-300 transform hover:scale-110"
                />
                <div className="mt-4">Anits event site</div>
              </div>
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className='flex flex-col mt-24 justify-center items-center'>
      <div className="w-2/3">
        <div className=''>
          <div className="mt-9 ml-4 text-4xl text-rose-600">MY PROJECTS</div>
          <div className="mt-4 ml-4 text-lg text-neutral-100">
            View my projects that are developed using various web frameworks and libraries.
            <br />
          </div>
        </div>
        <div className="flex justify-start space-x-4 mb-6 mt-6">
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'mern' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-white'}`}
            onClick={() => setActiveTab('mern')}
          >
            MERN
          </button>
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'java' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-white'}`}
            onClick={() => setActiveTab('java')}
          >
            Java
          </button>
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'figma' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-white'}`}
            onClick={() => setActiveTab('figma')}
          >
            Figma
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}

export default Projects;


