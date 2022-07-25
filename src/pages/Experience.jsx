import { useState } from 'react';
import ExperienceData from '../data/ExperienceData';
import ExpCard from "../components/cards/ExpCard";

function Experience() {
  const [exp, setExp] = useState(ExperienceData)

  return (
    <div id='experience' className='text-grey'>

      <div className="experience-wrapper container mx-auto  px-6 py-24 md:p-24">
        <div className='flex flex-col justify-center items-center text-center mb-10'>
          <h2 className='text-3xl font-semibold md:text-4xl'>Experience</h2>
          <span className='divider h-0.5 bg-teal w-40 mr-auto ml-auto my-8'></span>
          <p className="text-lg">
            Here is a summary of some roles I've had so far. Notable ones of date are my time as a Student
            at the <span className='underline'>Le Wagon Web Dev bootcamp</span>, a <span className='underline'>technology business analyst trainee</span> right after graduation,
            and a 7 month stint as a <span className='underline'>Content Marketing Intern</span> in Shenzhen, China,
            thanks to NUS's NOC program. Looking to positively contribute in my next role.
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
