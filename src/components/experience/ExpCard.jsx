import { GiGraduateCap, GiBriefcase } from "react-icons/gi";

function ExpCard( { position, company, desc, duration, icon } ) {
  //console.log(item);

  return (
    <div className="timeline-block">
      <div className="timeline-icon">
        { (icon === 'study') ? <GiGraduateCap size={28} /> : <GiBriefcase size={28} />}
      </div>

      <div className='timeline-card-wrapper'>
        <div className="timeline-card">
          <h2 className='font-bold uppercase mb-1'>{position}</h2>
          <h3 className="font-semibold text-teal">{company}</h3>
          <p className="my-5">
            {desc}
          </p>
          <p className="text-gray-400 uppercase">{duration}</p>
        </div>
      </div>
    </div>
  )
}

export default ExpCard
