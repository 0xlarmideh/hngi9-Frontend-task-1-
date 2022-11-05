export default function Contact () {

  return (
    <section className="contact-page">
      <h1 id="contact-h1">Contact me</h1>
      <p id="contact-description">Hi there, contact me to ask me about anything you have in mind.</p>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="grid-2">
            <div className="grid-items">
              <label for="fname">First name</label><br></br>
              <input type="text" id="first_name" name="fname" placeholder="Enter your first name"></input></div>
            <div className="grid-items">
              <label for="lname">Last name</label><br></br>
              <input type="text" id="last_name" name="lname" placeholder="Enter your last name"></input>
            </div>
          </div>
          <div className="grid-items">
              <label for="email">Last name</label><br></br>
              <input type="text" id="email" name="email" placeholder="yourname@email.com"></input>
            </div>
          <div className="grid-items">
              <label for="message">Message</label><br></br>
              <textarea type="text" id="message" name="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
          </div>
          <div className="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox"></input>
              <label for="checkbox">You agree to providing your data to Abdulhameed who may contact you.</label><br></br>
          </div>
          <input id="btn__submit" type="submit" label="Submit"></input>
          
        </form>
      </div>
    </section>
  )
}