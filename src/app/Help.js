import React from 'react'
import "./help.css";


const Help = () => {
  return (
    <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" id="name" name="name" required/>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <div class="col-md-6">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> example@example.com</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Help
