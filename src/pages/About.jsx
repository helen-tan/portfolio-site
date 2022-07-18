function About() {
  return (
    <div id='about' className='bg-black text-grey h-auto p-24'>
      <h2 className='text-5xl'>About Me</h2>
      <h3 className='text-xl my-4'>Hey there, my name is Helen and I'm a web developer with a passion for front end development.</h3>
      <span className='divider h-0.5 bg-teal w-40'></span>

      <div className="about-wrapper flex flex-col md:flex-row-reverse">
        <div className="flex justify-center items-center my-5 w-100 h-auto md:w-5/12">
          <img src="https://raw.githubusercontent.com/helen-tan/profile/master/images/profile.PNG" alt="Profile" className="rounded-full w-1/2 md: w-3/4"/>
        </div>
        <div className="about-text-wrapper w-100 md:w-7/12">
          <p className="text-lg mb-4">
            My interest in web development started back in 2017 as a second year student at the National University
            of Singapore, when I attended a Bootstrap workshop and learned how to remove an annoying popups by deleting
            it from the inspect elements page. Ever since, I have been learning on my own how to develop websites.
          </p>
          <p className="text-lg mb-4">
            After having the privilege of working as a technology business analyst for a year after graduation,
            I cemented my decision to become a web developer, attended a coding bootcamp. At the end of the day,
            I aim to understand how things work under the hood so as to write code that not only functions,
            but also understood by other developers.
          </p>
          <p className="text-lg mb-4">
            I consider work an ongoing education, and I hope to be with people who are willing to share their knowledge
            as much as I want to learn. I aspire towards a career where I can create beautiful products using good software
            practices, with people that bring out the best in each other.
          </p>
          <p className="text-lg mb-4">
          <strong className='text-teal'>When I’m not in front of a computer screen</strong>, I could be reading, petting cats, gaming on my PS4, or wandering some
          part of Singapore that I haven’t been to.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
