import React from 'react';

function Contact() {
  return (
    <>
    <section id="contact">
<h1 className='head pt-10 '>Contact</h1>
<hr className="border-t-2 w-1/2 mx-auto " />

      <div className="container-f pt-5">
        <div className="container-intro p-3">
          <h1>Let's talk</h1>
          <p >
            I'm currently available to take on new projects, so feel free to send me a message about anything
            that you want me to work on. You can contact me anytime.
          </p>
          <div className="connect"><button>Connect with me</button></div>
        </div>
       

        <div className="container-form">
          <input type="hidden" name="subject" value="New Submission from Portfolio" />
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </div>
      </div>
      </section>
    </>
  );
}

export default Contact;
