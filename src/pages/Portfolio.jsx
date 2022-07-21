import { useState } from 'react'
import FeaturedCard from "../components/cards/FeaturedCard"
import PortfolioData from "../data/PortfolioData"

function Portfolio() {
  const [projects, setProjects] = useState(PortfolioData)

  return (
    <div id='portfolio' className='bg-black text-grey h-auto px-6 py-24 md:p-24'>
      <h2 className='text-3xl font-semibold text-center md:text-4xl md:text-left'>Some Things I've Built</h2>
      <span className='divider h-0.5 bg-teal w-40 mx-auto md:ml-0'></span>

      <div className="portfolio-wrapper">
        {projects.map((project) => {
          return <FeaturedCard key={project.id} project={project}/>
        })}
      </div>

    </div>
  )
}

export default Portfolio
