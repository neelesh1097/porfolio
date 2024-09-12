import React from 'react'

function About() {
  return (
<>
         <section id="about">
         
    <h1 className='head pt-11 '>About Me</h1>
    <hr className='w-1/2 mx-auto' />

    <div className="container pt-6 flex flex-col items-center">
      <div className="content-about  pt-5 text-center">
      <p>As a fresher developer, I bring a strong foundation in software development, backed by academic knowledge and hands-on experience with modern technologies. With proficiency in languages like JavaScript and Java.
       My experience with frontend frameworks like React and backend technologies such as Node.js enables me to build dynamic and responsive web applications.</p>
       <br></br>
       <div className="about-skills">
      <div className="about-skill">
        <p>HTML &amp; CSS</p>
        <hr style={{ width: '50%' }} />
      </div>
      <div className="about-skill">
        <p>React JS</p>
        <hr style={{ width: '70%' }} />
      </div>
      <div className="about-skill">
        <p>JavaScript</p>
        <hr style={{ width: '60%' }} />
      </div>
      <div className="about-skill">
        <p>Node JS</p>
        <hr style={{ width: '50%' }} />
      </div>
    </div>
      
      </div>
    </div>
    </section>
    </>   
  )
}

export default About