import React from "react";
import "./testimonials.css";

export default function testimonials() {
return (

    <>
      <div>
          <div className="row mx-5">
                 
                  <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                      <div className="card shadow testimonial-card d-flex flex-column">
                          <img src="./media/jpmorgan.jpg" alt="" />  
                          <span>JP Morgan Software Engineering Virtual Experience</span>
                          <a href="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_acBcdNDigJGZLiMds_1642939328350_completion_certificate.pdf" >Show credential</a>  
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                      <div className="card shadow testimonial-card d-flex flex-column">
                          <img src="./media/mern.jpg" alt="" /> 
                          <span>Ethnus Certified MERN Full Stack Developer</span>
                          <a href="https://drive.google.com/file/d/1kIqotvyeN1OfimLNbJsNUMg-UswMYmDV/view?usp=sharing" >Show credential</a>     
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                      <div className="card shadow testimonial-card d-flex flex-column">
                          <img src="./media/coming.jpg" alt="" />
                          <span>AWS Certified Cloud Practitioner</span>
                          <a href="https://drive.google.com/file/d/1kIqotvyeN1OfimLNbJsNUMg-UswMYmDV/view?usp=sharing" >Show credential</a>    
                      </div>
                  </div>     
          </div>
      </div>
      </>


      );
  }
