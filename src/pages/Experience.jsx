import { GiGraduateCap, GiBriefcase } from "react-icons/gi";

function Experience() {
  return (
    <div id='experience' className='text-grey'>
      <div className='bg'></div>

      <div className="experience-wrapper px-6 py-24 md:p-24">
        <div className='flex flex-col justify-center items-center text-center mb-10'>
          <h2 className='text-5xl font-semibold'>Experience</h2>
          <span className='divider h-0.5 bg-teal w-40 mr-auto ml-auto my-8'></span>
          <p className="text-lg">
            I am a graduate from the class of 2020 at the National University of Singapore,
            majoring in Material Science and Engineering. At NUS, the rigor of the engineering
            academic program has equipped me with an analytical and logical thinking towards
            tackling problems.
          </p>
        </div>

        <div className="timeline-wrapper md:p-8">
          <i className="up-arrow"></i>
          <div className="timeline">

            <div className="timeline-block">
              <div className="timeline-icon">
                <GiGraduateCap size={28} />
              </div>

              <div className='timeline-card-wrapper'>
                <div className="timeline-card">
                  <h2 className='font-bold uppercase mb-1'>Full Stack Web Developer Student</h2>
                  <h3 className="font-semibold text-teal">Le Wagon, Singapore</h3>
                  <p className="my-5">
                    Attended a 9-week intensive coding bootcamp learning Ruby, HTML, CSS, Bootstrap,
                    JavaScript, SQL, git, GitHub, Figma prototyping, DB Schema planning, OOP, MVC (Model View Controller),
                    Object Relational Mapping, Heroku and Ruby on Rails. Designed, implemented and shipped to production
                    a 2 Ruby on Rails prototypes.
                  </p>
                  <p className="text-gray-400 uppercase">Apr 2022 - Jun 2022</p>
                </div>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-icon">
                <GiBriefcase size={28} />
              </div>

              <div className='timeline-card-wrapper'>
                <div className="timeline-card">
                  <h2 className='font-bold uppercase mb-1'>Junior Java Programmer</h2>
                  <h3 className="font-semibold text-teal">UBS AG, Singapore</h3>
                  <p className="my-5">
                    Debugged Java code and resolved all error messages.
                  </p>
                  <p className="text-gray-400 uppercase">Jul 2021 - Dec 2021 (6 Months)</p>
                </div>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-icon">
                <GiBriefcase size={28} />
              </div>

              <div className='timeline-card-wrapper'>
                <div className="timeline-card">
                  <h2 className='font-bold uppercase mb-1'>Technology Business Analyst</h2>
                  <h3 className="font-semibold text-teal">UBS AG, Singapore</h3>
                  <p className="my-5">
                    Translated business requirements from SMEs and product owner into solution features.
                    Collaborated with UI/UX specialist to create wireframes as per business requirements.
                    Wrote detailed epics, user stories and acceptance criteria, working with the Product Owner
                    to prioritize stories in the product backlog in JIRA for selection for the sprint backlog.
                  </p>
                  <p className="text-gray-400 uppercase">Nov 2020 - Jul 2021 (9 Months)</p>
                </div>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-icon">
                <GiGraduateCap size={28} />
              </div>

              <div className='timeline-card-wrapper'>
                <div className="timeline-card">
                  <h2 className='font-bold uppercase mb-1'>Undergraduate Research Engineer</h2>
                  <h3 className="font-semibold text-teal">National University of Singapore</h3>
                  <p className="my-5">
                    B.Eng Honors Year Research:  Influence of pH on the corrosion of AZ series Magnesium Alloys.
                    Conducted experiments using analytical methods such as the Tafel extrapolation, Electrochemical Impedance
                    Spectroscopy (EIS), Scanning Electron Microscopy (SEM) and the pH meter. Analyzed corrosion data like
                    Tafel plots, Nyquist plots, SEM images, Hydrogen Evolution rates and Weight Loss data, to understand the
                    corrosion mechanism of AZ91.
                  </p>
                  <p className="text-gray-400 uppercase">Aug 2019 - May 2020 (10 Months)</p>
                </div>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-icon">
                <GiBriefcase size={28} />
              </div>

              <div className='timeline-card-wrapper'>
                <div className="timeline-card">
                  <h2 className='font-bold uppercase mb-1'>Content Marketing Intern</h2>
                  <h3 className="font-semibold text-teal">Seeed Studio, Shenzhen, China</h3>
                  <p className="my-5">
                    Brainstormed technical content and researched keywords for SEO articles, thereby writing the company's
                    top 3 most visited online articles and increasing web traffic. Wrote online quick-start guides on how
                    to set up basic electronic projects with Arduino, simplifying technical jargon into information more
                    easily understood by the layman. Drove awareness of Seeed's services through Facebook and Twitter and
                    assisted with the designing of Email Digital Marketing campaigns, increasing the amount of customer engagement.
                  </p>
                  <p className="text-gray-400 uppercase">Jan 2019 - Jul 2019 (7 Months)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience
