import React from "react";
import "./assets/css/style.css";
import sdhi from "./assets/img/team/1.jpg";
import rohan from "./assets/img/team/2.jpg";
import sourav from "./assets/img/team/3.jpg";
import sambhab from "./assets/img/team/4.jpg";
import situ from "./assets/img/team/5.jpg";

import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";




const about = () => {
  return (

    <section id="team" class="team section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Team Lead</h2>
        <p>
          
        </p>
      </div>


      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src={sdhi} class="img-fluid" alt="" />
              <div class="social">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>       
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-github"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Siddhart</h4>
              <span>CEO</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src={rohan} class="img-fluid" alt="" />
              <div class="social">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>       
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-github"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Rohan Kar</h4>
              <span>CEO</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src={sourav} class="img-fluid" alt="" />
              <div class="social">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>       
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-github"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Sourav Dhali</h4>
              <span>3d</span>
            </div>
          </div>
        </div>

      </div>
      <div class="row justify-content-center">


        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src={sambhab} class="img-fluid" alt="" />
              <div class="social">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>       
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-github"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Sambhab</h4>
              <span>3d</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src={situ} class="img-fluid" alt="" />
              <div class="social">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>       
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
                <a href=""><i class="bi bi-github"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>Chinmaya Kumar Biswal</h4>
              <span>Web</span>
            </div>
          </div>
        </div>


      </div>
      </div>
  </section>
  );
};

export default about;
