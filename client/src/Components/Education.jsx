import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam.tsx";

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex flex-col mt-24 justify-center items-center'>
      <div className="w-2/3">
        <div className=''>
          <div className="flex text-4xl justify-start space-x-4 mb-6 mt-6">
            <button
              className={twMerge(
                "px-4 py-2 font-semibold",
                activeTab === 'education' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-white'
              )}
              onClick={() => handleTabClick('education')}
            >
              Education
            </button>
            <button
              className={twMerge(
                "px-4 py-2 font-semibold",
                activeTab === 'experience' ? 'text-rose-600 border-b-2 border-rose-600' : 'text-white'
              )}
              onClick={() => handleTabClick('experience')}
            >
              Experience
            </button>
          </div>
          <div>
            {activeTab === 'education' && (
              <TracingBeam className="px-6 mt-10">
                <div className="max-w-2xl text-white mx-auto antialiased pt-4 relative">
                  {EducationContent.map((item, index) => (
                    <div key={`education-${index}`} className="mb-10">
                      <div className='flex flex-row items-center justify-between'>
                        <p className="text-xl mb-4">
                          {item.title}
                        </p>
                        <div className="text-sm prose prose-sm dark:prose-invert">
                          {item.description}
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        {item.place}
                      </p>
                      <p className="text-sm mb-4">
                        {item.CGPA}
                      </p>
                    </div>
                  ))}
                </div>
              </TracingBeam>
            )}
            {activeTab === 'experience' && (
              <TracingBeam className="px-6 mt-10">
                <div className="max-w-2xl text-white mx-auto antialiased pt-4 relative">
                  {ExperienceContent.map((item, index) => (
                    <div key={`experience-${index}`} className="mb-10">
                      <div className='flex flex-row items-center justify-between'>
                        <p className="text-xl mb-4">
                          {item.company}
                        </p>
                        <div className="text-sm prose prose-sm dark:prose-invert">
                          {item.role}
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </TracingBeam>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

const EducationContent = [
  {
    title: "Bachelor Of Technology",
    place: "Vignan's Institute Of Information Technology",
    description: "2021-2025",
    CGPA: "CGPA 9.2",
  },
  {
    title: "Intermediate",
    place: "Narayana Junior College",
    description: "2019-2021",
    CGPA: "96%",
  },
  {
    title: "Secondary Education",
    place: "Springdales Public School",
    description: "-2019",
    CGPA: "10 points",
  },
];

const ExperienceContent = [
  {
    company: "Oasis Infobyte",
    role: "web developer",
    date: "2022-2023",
    certificate: "Certificate A",
  },
  {
    company: "TechnoHacks",
    role: "Java Developer",
    date: "2023-2024",
    certificate: "Certificate B",
  },

];
