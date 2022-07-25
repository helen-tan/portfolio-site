import { BsBookFill, BsTools } from 'react-icons/bs'
import githubLogo from '../assets/images/skills/github-logo-white.png'
import cliLogo from '../assets/images/skills/cli-logo-white.png'
import postmanLogo from '../assets/images/skills/postman-logo.png'

function About() {
  return (
    <div id='about' className='container mx-auto bg-black text-grey h-auto px-6 py-24 md:p-24'>
      {/*Text Section */}
      <h2 className='text-3xl font-semibold text-center md:text-4xl md:text-left'>About Me</h2>
      <h3 className='text-xl font-semibold my-4 text-center md:text-left'>Hey there, my name is Helen and I'm a web developer with a passion for front end development.</h3>
      <span className='divider h-0.5 bg-teal w-40 mx-auto md:ml-0'></span>

      <div className="about-wrapper flex flex-col md:flex-row-reverse">
        <div className="flex justify-center items-center my-5 w-100 h-auto md:w-5/12">
          <img src="https://raw.githubusercontent.com/helen-tan/profile/master/images/profile.PNG" alt="Profile" className="rounded-full w-1/2 md: w-3/4"/>
        </div>
        <div className="about-text-wrapper w-100 mb-24 md:w-7/12">
          <p className="text-lg mb-4">
            My interest in web development started back in 2017 as a second year Engineering student at the National University
            of Singapore, when I attended a Bootstrap workshop and learned how to remove an annoying popups by deleting
            it from the inspect elements page. Ever since, I have been learning on my own how to develop websites.
          </p>
          <p className="text-lg mb-4">
            After having the privilege of working as a <span className='text-teal'>technology business analyst</span> for a year after graduation,
            I experienced the process of gathering requirements and translating them into wireframes. It quickly became apparent that
            understanding how code works is key to becoming an effective member on a tech team, so as to communicate with other devs in
            their lingo, or to judge whether certain features are feasible.
          </p>
          <p className="text-lg mb-4">
            I cemented my decision to become a web developer, attended a <span className='text-teal'>coding bootcamp</span> to learn the fundamentals, and everyday I strive to learn a little more about the craft. At the end of the day,
            I aim to understand how things work under the hood so as to write code that not only functions,
            but also understood by other developers.
          </p>
          <p className="text-lg mb-4">
            I consider work an ongoing education, and I hope to be in a supportive community where people are willing to exchange
            knowledge and grow together. I aspire towards a career where I can create useful products using good software
            practices, with people who bring out the best in each other.
          </p>
          <p className="text-lg mb-4">
          <strong className='text-teal'>When I’m not in front of a computer screen</strong>, I could be reading, petting cats, gaming on my PS4, queuing for bubble tea, or wandering some
          part of Singapore that I haven’t been to.
          </p>
        </div>

      </div>

      {/*Skills Section */}
      <h2 className='text-3xl font-semibold text-center md:text-4xl md:text-left'>Skills</h2>
      <span className='divider h-0.5 bg-teal w-40 mx-auto md:ml-0'></span>
      <p className="text-xl font-semibold mb-4 text-center md:text-left">Some technologies I've used:</p>

      <div className='about-skills-wrapper flex flex-col md:flex-row justify-between'>
        {/*Languages & Frameworks*/}
        <div className='w-full p-4 md:w-1/2'>
          <div className='text-2xl font-semibold p-3 w-full flex items-center justify-center md:justify-start w-1/2'>
            <BsBookFill/>
            <h3 className='ml-2'>Languages and Frameworks</h3>
          </div>
          <div className='bg-dark-grey h-fit rounded-lg flex flex-col p-4'>
            <div className='flex'>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="SCSS" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className='w-1/4 p-4'/>
            </div>
            <div className='flex'>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="Ruby" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/dereknguyen269/dereknguyen269/master/images/rails.png" alt="Ruby on Rails" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className='w-1/4 p-4'/>
            </div>
            <div className='flex'>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className='w-1/4 p-4'/>
            </div>
          </div>
        </div>

        {/*Tools*/}
        <div className='w-full p-4 md:w-1/2'>
          <div className='text-2xl font-semibold p-3 w-full flex items-center justify-center md:justify-start w-1/2'>
            <BsTools/>
            <h3 className='ml-2'>Tools</h3>
          </div>
          <div className='bg-dark-grey h-fit rounded-lg flex flex-col p-4'>
            <div className='flex'>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VSCode" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" className='w-1/4 p-4'/>
              <img src={githubLogo} alt="GitHub" className='w-1/4 p-4'/>
              <img src={cliLogo} alt="JavaScript" className='w-1/4 p-4'/>
            </div>
            <div className='flex'>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" alt="Figma" className='w-1/4 p-4'/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className='w-1/4 p-4'/>
              <img src={postmanLogo} alt="Postman" className='w-1/4 p-4'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
