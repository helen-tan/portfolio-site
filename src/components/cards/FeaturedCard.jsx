function FeaturedCard({ project }) {
  //console.log(project)

  return (
    <div className="featured-card p-3">

      <div className="screenshots">
        <img className='img-1' src={project.img_1_path} alt="screenshot" />
        <img className='img-2' src={project.img_2_path} alt="screenshot" />
      </div>

      <div className="featured-header flex flex-col pb-3 pt-6 md:flex-row md:justify-between">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="flex mt-3 md:mt-0">
          <a href={project.demo_link} target="_blank" rel="noreferrer" className='btn btn-transparent-teal btn-sm mr-2'>Demo</a>
          <a href={project.code_link} target="_blank" rel="noreferrer" className='btn btn-transparent-teal btn-sm'>Code</a>
        </div>
      </div>

      <div className="featured-description w-full py-3">
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

export default FeaturedCard
