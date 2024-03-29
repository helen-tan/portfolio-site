import chumHomepage from '../assets/images/portfolio/chum-homepage.PNG'
import chumCards from '../assets/images/portfolio/chum-itineraries.PNG'
import meatRepoHomepage from '../assets/images/portfolio/meatrepo-homepage.PNG'
import meatRepoProducts from '../assets/images/portfolio/meatrepo-products.PNG'
import genshinWish1 from '../assets/images/portfolio/genshinwish-1.PNG'
import genshinWish2 from '../assets/images/portfolio/genshinwish-2.PNG'
import portfolioSite1 from '../assets/images/portfolio/portfolio-site-1.PNG'
import portfolioSite2 from '../assets/images/portfolio/portfolio-site-2.PNG'

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
  },
  {
    id: 2,
    title: "The Meat Repo",
    desc: "Also developed during the Bootcamp, the Meat Repo is a Ruby on Rails marketplace application that allows butcheries to sell meat products. This project was my first foray into Ruby on Rails and served as an important first step towards learning how to develop software in a team using Git.",
    demo_link: "https://themeatrepo.herokuapp.com/",
    code_link: "https://github.com/ecyl/rails-themeatrepo",
    used_items: ["HTML", "SCSS", "Bootstrap", "JavaScript", "StimulusJS", "Ruby on Rails", "Cloudinary", "PostgreSQL"],
    featured: true,
    img_1_path: `${meatRepoHomepage}`,
    img_2_path: `${meatRepoProducts}`
  },
  {
    id: 3,
    title: "Genshin Impact Wish Simulator",
    desc: "This was my very first vanilla JavaScript web project that I made for fun (and as a small contribution to the sprawling fan content already out there for Genshin Impact). After a few months of brushing up on vanilla JS in preparation to learn JS frameworks, I made this as practice for basic JavaScript concepts.",
    demo_link: "https://helen-tan.github.io/genshin-impact-wish-simulator/",
    code_link: "https://github.com/helen-tan/genshin-impact-wish-simulator",
    used_items: ["HTML", "CSS", "JavaScript"],
    featured: true,
    img_1_path: `${genshinWish1}`,
    img_2_path: `${genshinWish2}`
  },
  {
    id: 4,
    title: "Personal Website",
    desc: "This is my first portfolio website, built with ReactJS and Tailwind CSS. I was interested in learning both ReactJS and Tailwind CSS and hence decided to try them out for this portfolio website.",
    demo_link: "https://helen-tan.github.io/portfolio-site/",
    code_link: "https://github.com/helen-tan/portfolio-site",
    used_items: ["HTML", "SCSS", "Tailwind CSS", "ReactJS"],
    featured: true,
    img_1_path: `${portfolioSite1}`,
    img_2_path: `${portfolioSite2}`
  },
  {
    id: 5,
    title: "React Github Finder",
    desc: "A React application that uses the GitHub API to find a GitHub user profile.",
    demo_link: "https://react-github-finder-swart.vercel.app/",
    code_link: "https://github.com/helen-tan/react-github-finder",
    used_items: ["HTML", "CSS", "ReactJS", "Tailwind CSS"],
    featured: false,
    img_1_path: "",
    img_2_path: ""
  },
  {
    id: 6,
    title: "Movies Watch List",
    desc: "An application for saving movies by genre, built with Ruby on Rails. A practice project made during the Le Wagon bootcamp.",
    demo_link: "",
    code_link: "https://github.com/helen-tan/rails-watch-list",
    used_items: ["HTML", "SCSS", "JavaScript", "Ruby on Rails", "Cloudinary", "PostgreSQL"],
    featured: false,
    img_1_path: "",
    img_2_path: ""
  },
  {
    id: 7,
    title: "Feedback App",
    desc: "A simple React app that allows users to create, update and delete a feedback with ratings.",
    demo_link: "https://feedback-react-app-prac.herokuapp.com/",
    code_link: "https://github.com/helen-tan/react-feedback-app",
    used_items: ["HTML", "CSS", "ReactJS"],
    featured: false,
    img_1_path: "",
    img_2_path: ""
  },
  {
    id: 8,
    title: "Github Finder",
    desc: "A simple vanilla JS application to find a Github user profile with the Github API.",
    demo_link: "",
    code_link: "https://github.com/helen-tan/github-finder",
    used_items: ["HTML", "CSS", "JavaScript"],
    featured: false,
    img_1_path: "",
    img_2_path: ""
  },
  {
    id: 9,
    title: "House Marketplace",
    desc: "A mobile web application where users can find and list houses for sale or for rent. This is a React / Firebase v9 project from Brad Traversy's React Front to Back course on Udemy.",
    demo_link: "https://house-marketplace-nine-topaz.vercel.app/",
    code_link: "https://github.com/helen-tan/house-marketplace",
    used_items: ["ReactJS", "Firebase"],
    featured: false,
    img_1_path: "",
    img_2_path: ""
  }
]

export default PortfolioData;
