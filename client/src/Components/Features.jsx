import React from 'react'
import web from "../Images/web.jpg"
import uiux from "../Images/uiux.jpg"
import coding from "../Images/coding.jpg"


const Features = () => {
  return (
   <div className=' flex justify-center'>
     <div className='flex w-2/3  justify-start flex-col '>
        <div className="mt-9 ml-4 text-4xl text-rose-600">FEATURES</div>
      <div className="mt-4 ml-4 text-lg text-neutral-100">
        What I Do
        <br />
      </div>
      <div className="mt-14 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">

            {/* web developer */}
          <div className="flex shadow-md rounded-xl shadow-gray-600 flex-col w-3/4 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-7 pt-8 pb-16 w-full text-base text-white rounded-xl bg-black bg-opacity-30 max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet={web}
                className="aspect-[1.56] w-[198px]"
              />
              <div className="mt-10">Web Development</div>
            </div>
          </div>
          {/* ui/ux */}
          <div className="flex shadow-md rounded-xl shadow-gray-600 flex-col ml-5 w-3/4 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-7 pt-8 pb-16 w-full text-base text-white rounded-xl shadow-sm bg-black bg-opacity-30 max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet={uiux}
                className="aspect-[1.56] w-[198px]"
              />
              <div className="mt-9">UI/UX design</div>
            </div>
          </div>
          <div className="flex shadow-md rounded-xl shadow-gray-600 flex-col ml-5 w-3/4 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-7 pt-8 pb-16 w-full text-base text-white rounded-xl shadow-sm bg-black bg-opacity-30 max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet={coding}
                className="aspect-[1.56] w-[198px]"
              />
              <div className="mt-9">Coding</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Features