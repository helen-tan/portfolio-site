import chumHomepage from '../assets/images/portfolio/chum-homepage.PNG'
import chumCards from '../assets/images/portfolio/chum-itineraries.PNG'

const PortfolioData = [
  {
    id: 1,
    title: "CHUM",
    desc: "During the bootcamp at Le Wagon, I’ve designed and developed CHUM, a Ruby on Rails web application with 3 other teammates. User can plan trips and post itineraries for other people to join, or join a trip posted by others. Having faced the difficulty of planning overseas trips with friends due to conflicting schedules, we spun up this project during our project week.",
    demo_link: "https://www.chum.voyage/",
    code_link: "https://github.com/rayjosong/rails-chum",
    used_items: ["HTML", "SCSS", "Bootstrap", "JavaScript", "StimulusJS", "Ruby on Rails", "Cloudinary", "PostgreSQL"],
    featured: true,
    img_1_path: `${chumHomepage}`,
    img_2_path: `${chumCards}`
  }
]

export default PortfolioData;
