import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import personalData from '../Config/Data'
const About = () => {

    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <>
      <div id="about" className="py-5 bg-light">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-12 mb-4 about-img text-center" >
            <img src={personalData.aboutImg} alt=""  />
          </div>

          <div className="col-lg-6 col-md-12 about-content px-5" >
            <h2 className="heading">About <span>Me</span></h2>
            <h3>{personalData.aboutTitle}</h3>
            <p className={personalData.fontcolor}>
              {personalData.aboutText}
            </p >
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About