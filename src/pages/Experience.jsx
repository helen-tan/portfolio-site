import { useState } from 'react';
import ExperienceData from '../data/ExperienceData';
import ExpCard from "../components/experience/ExpCard";

function Experience() {
  const [exp, setExp] = useState(ExperienceData)

  return (
    <div id='experience' className='text-grey'>

      <div className="experience-wrapper px-6 py-24 md:p-24">
        <div className='flex flex-col justify-center items-center text-center mb-10'>
          <h2 className='text-3xl font-semibold md:text-4xl'>Experience</h2>
          <span className='divider h-0.5 bg-teal w-40 mr-auto ml-auto my-8'></span>
          <p className="text-lg">
            I am a graduate from the class of 2020 at the National University of Singapore,
            majoring in Material Science and Engineering. At NUS, the rigor of the engineering
            academic program has equipped me with an analytical and logical thinking towards
            tackling problems.
          </p>
        </div>

        <div className="timeline-wrapper md:p-8">
          <i className="up-arrow"></i>
          <div className="timeline">

            {exp.map((item) => {
              return <ExpCard key={item.id}
                              position={item.position}
                              company={item.company}
                              desc={item.desc}
                              duration={item.duration}
                              icon={item.icon}/>
            })}

          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience
