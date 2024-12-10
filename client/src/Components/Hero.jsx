import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const words = ["a Software developer", "a Designer"];
  const typingSpeed = 100;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(currentWord.slice(0, index + 1));
      index++;
      if (index >= currentWord.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); 
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  return (
    <>
      <div className="w-full flex justify-center items-center p-10 max-md:max-w-full">
          <div className="flex ml-10 flex-col h-full text-center justify-center items-center max-md:ml-0 max-md:w-full">
            <div className="text-slate-300 max-md:mt-10">
              <p className='text-lg'>WELCOME TO MY WORLD</p>
              <br />
              <br />
              <span className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">Hi, I’m</span>
              <span className="text-rose-600 text-base sm:text-xl md:text-3xl lg:text-5xl font-bold"> Sai Harshitha</span>
              <br />
              <div className="typing-container mt-3 ">
                <span className="typing text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">{displayedText}</span>
              </div>
              <br/>
              <br />
              <br />
              <span className="text-lg">
              A passionate MERN Stack Developer, UI/UX Designer, and competitive programmer. I use my skills to create dynamic web applications, intuitive user interfaces, and solve complex problems through code. My projects showcase my ability to blend design and functionality seamlessly.
              </span>
              <br />
              <br />
              
            </div>
          </div>
      </div>
    </>
  );
}

export default Hero;
