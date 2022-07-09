import React from "react";
import "./css/bootstrap.min.css";
import "./css/main.css"

const Contactus = () => {
  return (
    <div>
      <div class="container-contact100">
        <div
          class="contact100-map"
          id="google_map"
          data-map-x="40.722047"
          data-map-y="-73.986422"
          data-pin="images/icons/map-marker.png"
          data-scrollwhell="0"
          data-draggable="1"
        ></div>
        <div class="wrap-contact100">
          <form
            class="contact100-form validate-form"
            action="chinmaya_contact.php"
            method="post"
          >
            <span class="contact100-form-title">Contact Us</span>
            <div
              class="wrap-input100 validate-input"
              data-validate="Please enter your name"
            >
              <input
                class="input100"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Please enter email: e@a.x"
            >
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Please enter your message"
            >
              <textarea
                class="input100"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <span class="focus-input100"></span>
            </div>
            <div class="container-contact100-form-btn">
              <button class="contact100-form-btn">Send Email</button>
            </div>
          </form>
          <div class="contact100-more">
            Contact us:{" "}
            <span class="contact100-more-highlight">+91 6370183009</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
