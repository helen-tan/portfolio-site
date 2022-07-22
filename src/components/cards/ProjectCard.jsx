import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  return(
    <div className="project-card bg-dark-grey p-8 rounded group transition duration-300 ease-in-out hover:-translate-y-2">

      <div className="project-card-top flex justify-between items-center mb-3">
        <FiFolder className='text-teal text-4xl' />
        <div className="project-links flex items-center">
          {(project.code_link !== "") ?
            <a href={project.code_link} target="_blank" rel="noreferrer" className="mr-2"><FiGithub size={20} /></a> : null
          }
          {(project.demo_link !== "") ?
            <a href={project.demo_link} target="_blank" rel="noreferrer"><FiExternalLink size={20} /></a> : null
          }
        </div>
      </div>

      <h3 className="mb-3 font-bold text-2xl group-hover:text-teal">
        <a href={project.demo_link} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h3>

      <div className="project-description w-full">
        <p>{project.desc}</p>
      </div>

      <div className="used">
        <ul className="used-items">
          {project.used_items.map((item) => {
            return <li className="used-item" key={item}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
