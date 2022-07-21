function FeaturedCard() {
  return (
    <div className="featured-card p-3">
      <div className="screenshots">

      </div>
      <div className="featured-header flex flex-col py-3 md:flex-row md:justify-between">
        <h3 className="text-2xl font-bold">CHUM</h3>
        <div className="flex mt-3 md:mt-0">
          <a href="https://www.chum.voyage/" target="_blank" rel="noreferrer" className='btn btn-transparent-teal btn-sm mr-2'>Demo</a>
          <a href="https://github.com/rayjosong/rails-chum" target="_blank" rel="noreferrer" className='btn btn-transparent-teal btn-sm'>Code</a>
        </div>
      </div>

      <div className="featured-description w-full py-3">
        <p>
        During the bootcamp at Le Wagon, I’ve designed and developed CHUM, a Ruby on Rails web application with 3 other teammates. User can plan trips and post itineraries for other people to join, or join a trip posted by others. Having faced the difficulty of planning overseas trips with friends due to conflicting schedules, we spun up this project during our project week.
        </p>
      </div>

      <div className="used">
        <ul className="used-items">
          <li className="used-item">HTML</li>
          <li className="used-item">SCSS</li>
          <li className="used-item">Bootstrap</li>
          <li className="used-item">JavaScript</li>
          <li className="used-item">StimulusJS</li>
          <li className="used-item">Ruby on Rails</li>
          <li className="used-item">Cloudinary</li>
          <li className="used-item">PostgreSQL</li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturedCard
