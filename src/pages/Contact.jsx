function Contact() {
  return (
    <div id='contact' className='container mx-auto text-grey h-auto px-6 py-24 flex flex-col justify-center items-center md:p-24'>
      <div className="flex flex-col justify-center items-center max-w-lg">
        <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
        <p className='text-center text-zinc-300 leading-relaxed mb-12'>
          I am currently looking for opportunities in a place to contribute as a developer, and learn about good
          software development practices with a good mentor. If you are hiring or just want to say hi, feel free
          to drop me a message on LinkedIn and I'll try my best to get back to you!
        </p>
        <a href='https://www.linkedin.com/in/helen-tan-mz/' target="_blank" rel="noreferrer" className='btn btn-transparent-teal btn-lg'>Say Hello</a>
      </div>
    </div>
  )
}

export default Contact
