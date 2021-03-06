import styles from './ContactForm.module.css'

export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email: </label>{' '}
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message: </label>
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <style jsx>{`
        
      `}</style>
    </form>
  )
}