import { BsBookFill, BsTools } from 'react-icons/bs'

function About() {
  return (
    <div id='about' className='bg-black text-grey h-auto p-24'>
      <h2 className='text-5xl font-semibold'>About Me</h2>
      <h3 className='text-2xl font-semibold my-4'>Hey there, my name is Helen and I'm a web developer with a passion for front end development.</h3>
      <span className='divider h-0.5 bg-teal w-40'></span>

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
            I experienced the process of gathering requirements and translating them into a wireframe. It quickly became apparent that
            understanding how code works is key to becoming an effective member on a tech team, so as to communicate with other devs in
            their lingo, or to judge whether certain features are feasible.
          </p>
          <p className="text-lg mb-4">
            I cemented my decision to become a web developer, attended a <span className='text-teal'>coding bootcamp</span> to learn the fundamentals, and everyday I strive to learn a little more about the craft. At the end of the day,
            I aim to understand how things work under the hood so as to write code that not only functions,
            but also understood by other developers.
          </p>
          <p className="text-lg mb-4">
            I consider work an ongoing education, and I hope to be with people who are willing to share their knowledge
            as much as I want to learn. I aspire towards a career where I can create useful products using good software
            practices, with people who bring out the best in each other.
          </p>
          <p className="text-lg mb-4">
          <strong className='text-teal'>When I’m not in front of a computer screen</strong>, I could be reading, petting cats, gaming on my PS4, queuing for bubble tea, or wandering some
          part of Singapore that I haven’t been to.
          </p>
        </div>

      </div>

      <h2 className='text-5xl font-semibold'>Skills</h2>
      <span className='divider h-0.5 bg-teal w-40'></span>
      <p className="text-2lg mb-4">Some technologies I've used:</p>

      <div className='about-skills-wrapper flex flex-col md:flex-row justify-between'>
        <div className='text-2xl font-semibold p-4 w-full flex items-center justify-center md:justify-start w-1/2'>
          <BsBookFill/>
          <h3 className='ml-2'>Languages and Frameworks</h3>
        </div>

        <div className='text-2xl font-semibold p-4 w-full flex items-center justify-center md:justify-start w-1/2 '>
          <BsTools/>
          <h3 className='ml-2'>Tools</h3>
        </div>

      </div>
    </div>
  )
}

export default About
