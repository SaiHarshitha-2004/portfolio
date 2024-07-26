import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col mt-24 justify-center items-center'>
      
     <div className="w-2/3">
     <div className=''>
      <div className="mt-9 ml-4 text-4xl text-rose-600">PROFESSIONAL SKILLS</div>
      <div className="ml-4 flex w-full flex-row mt-6 flex-wrap justify-center text-lg text-neutral-100"> 
        {/* development */}
        <div className='flex  w-1/2 flex-col'>
          <div className='text-rose-600'>Development</div>
          <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JS</p>
          <p>React</p>
          <p>Node js</p>
          <p>Express js</p>
          <p>sql</p>
          <p>mongodb</p>
          </div>
        </div>

        <div className='flex w-1/2  flex-col'>
          <div className='text-rose-600'>Programming</div>
          <div>
          <p>C</p>
          <p>cpp</p>
          <p>python</p>
          <p>java</p>
          </div>
          <div className='mt-6'>
            <p className='text-rose-600'>Design</p>
            <p>Figma</p>
          </div>
        </div>
      <br />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Skills