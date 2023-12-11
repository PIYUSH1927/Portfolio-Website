import { useEffect, useRef, useState } from "react";
import Contact from "./contact";
import Testimonials from "./testimonials";
import Education from "./Education";
import Programming from "./Programming";
import Projects from "./Projects"
import Work from "./Work"
import './App.css';
import Typed from 'typed.js';

export function App() {
  const [education,seteducation]=useState(true);
  const [workhistory, setworkhistory]=useState(false);
  const [programmings, setprogrammings]=useState(false);
  const [projects, setprojects]=useState(false);
  const [opennav, setopennav]=useState(false);
  
  useEffect(()=>{
    const typed = new Typed(el.current,{
      strings:["Full-Stack Developer💻","Data Science Enthusiast","MERN Stack Developer","AWS Cloud Practitioner"
    ],startDelay:0,
    typeSpeed:80,
    backSpeed:30,
    backDelay:150,
    smartBackspace:true,
    loop:true,
    showCursor:true,
    cursorChar:"|"

    });

    return ()=>{
      typed.destroy()
    };
  },[])
  const el = useRef(null);
  
  function SetAllFalse(){
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
      <div className="d-flex flex-row justify-content-between">
        <span className="name2 d-flex align-items-center">Piyush Padia</span>
      <div className="bars mx-2" onClick={() => setopennav(!opennav)}>{" "}</div>
      </div>
      </div>
      <nav className={ !opennav ? " d-flex px-9 py-1 flex-rows navbar-new transition-all " : " d-flex px-9 py-1 flex-rows navbar-fixed-new transition-all " }>
      <span className="name">PIYUSH PADIA</span>
      <div className="d-flex flex-rows"> 
      <a href="#Home" className="mx-4 nav-items" onClick={()=>setopennav(false)}>Home</a>
      <a href="#aboutme" className="mx-4 nav-items" onClick={()=>setopennav(false)}>About me</a>
      <a href="#Resume" className="mx-4 nav-items" onClick={()=>setopennav(false)}>Resume</a>
      <a href="#Testimonial" className="mx-4 nav-items" onClick={()=>setopennav(false)}>My Services</a>
      <a href="#contactme" className="mx-4 nav-items" onClick={()=>setopennav(false)}>Contact me</a>
      </div>
    </nav>
    <div className="herosection px-10 py-4" id="Home">
      
    <div className="herosection-2 row justify-content-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="d-flex flex-column justify-content-center Im-text-section">
          <div className="mx-2 nav-items yo">
            <a href="https://github.com/PIYUSH1927" target="_blank">
              <i className="fa fa-github mx-2"></i>
            </a>
            <a href="https://www.linkedin.com/in/piyush-padia-a47766215/" target="_blank">
              <i className="fa fa-linkedin mx-2"></i>
            </a>
            <a href="https://www.instagram.com/piyush_padia/" target="_blank">
              <i className="fa fa-instagram mx-2"></i>
            </a>
            <a href="https://twitter.com/piyushpadia12" target="_blank">
              <i className="fa fa-twitter mx-2"></i>
            </a>
          </div>

          <span className="Im-text">Hello, I'm <span className="name-Im-text">Piyush Padia</span></span>
          <span className="Im-text-enthusiastic py-2" ref={el} style={{minHeight:"65px"}}>
            
            
             
          </span>
          <span className="Im-text-subheading" >
          Skilled Full Stack Developer with a knack for seamlessly integrating front-end and back-end operations to create robust web applications
          </span>
          <div className="d-flex flex-row justify-content-center mt-5">
            <a href="#contactme" className="btn-hire-me">Hire me</a>
            <a href="https://drive.google.com/file/d/1Y4mSomJV9qvQR1N7GcvWdBpWF9G7B2cu/view?usp=sharing" className="btn-resume-me" target="_blank">Get Resume</a>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6 col-sm-12">
        <div className="d-flex justify-content-center custom-div-outer-img"> 
          <img className="img-fluid custom-img" alt="heroimage" src="./media/pp.jpg"/> 
        </div>
      </div>
    </div>
  <br/>
  <br/>
    </div>
    <div className="about-me-section aboutme-inside my-5">

      <div className="d-flex flex-column">
        <span className="about-me-text" id="aboutme"> About me </span>
        <span className="why-text-sub">Why Choose me?</span>
        <div className="row justify-content-center shadow-lg my-5">
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <lottie-player className="lottie-1" src="https://assets10.lottiefiles.com/packages/lf20_v1yudlrx.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
        </div >
        <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
          <span className="some-text-about-me">
          Hailing from the vibrant state of Jharkhand, India, I'm Piyush Padia, a Full-Stack web developer currently pursuing a Bachelor's degree in Computer Science at Vellore Institute of Technology. My passion for web development is the driving force behind my work, and I'm always seeking opportunities to create innovative digital experiences. If you have a project that needs a dedicated developer with a keen eye for detail and a commitment to excellence, I'm here to help. Feel free to explore my resume section below, and let's embark on a journey to turn your ideas into reality.
          </span>
          <span className="few-highlights">
            <span className="few-text">Here are few hightlights</span>
            <span className="few-list">
              <ul>
                <li>Full-Stack developer</li>
                <li>MERN Stack Developer</li>
                <li>Data Science Enthusiast</li>
                <li>AWS Cloud Practitoner</li>
              </ul>
            </span>
          </span>
        </div>
        </div>
      </div>

    </div>
    <div className="resume-outer-section d-flex flex-column">
      <span className="about-me-text" id="Resume">Resume</span>
      <span className="why-text-sub">My formal Bio Details</span>
      <div className="resume-new-section row" style={{ width: "70%", marginInline:"auto" }}>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-row  resume-left-section px-0 shadow-lg" 
          >
          <div className="d-flex flex-column bg-new text-white">
            <span class="icons-span">
              <i class="fa-solid fa-graduation-cap"></i>
            </span>
            <span class="icons-span">
              <i class="fa-solid fa-briefcase"></i>
            </span>
            <span class="icons-span">
              <i class="fa-solid fa-file-code"></i>
            </span>
            <span class="icons-span">
              <i class="fa-solid fa-list-check"></i>
            </span>
          </div>
          <div className="d-flex flex-column">
            <span className={ education === false ? "resume-options-items" : "selected resume-options-items" } onClick={() => { ChangeState(seteducation ,true);}}>Education</span>
            <span className={ workhistory === false ? "resume-options-items" : "selected resume-options-items" } onClick={() => { ChangeState(setworkhistory ,true);}} >Experience</span>
            <span className={ programmings === false ? "resume-options-items" : "selected resume-options-items" } onClick={() => { ChangeState(setprogrammings ,true);}}>Programming</span>
            <span className={ projects === false ? "resume-options-items" : "selected resume-options-items" } onClick={() => { ChangeState(setprojects ,true);}}>Projects</span>
          </div>
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />} 
          </div>

      </div>
    </div>
    <br />
    <br />

    <div className="testimonials-part my-5">
      <div className="testimonials-inner-part d-flex flex-column"> 
        <span className="about-me-text "  id="Testimonial">Certifications</span>
        <Testimonials />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="contact-me-part" id="contactme">

      <div className="relative-bg"> </div>

      <div classNamw="contact-inner-part d-flex flex-column">

        <div className="contact-me-text">Contact Me</div>
        <span className="touch-text mb-5">Get in Touch</span>
        <Contact />
      </div>
    </div>
    <footer>© 2023 &nbsp; Piyush Padia <br />
    <div className="mx-2 nav-items yo">
            <a href="https://github.com/PIYUSH1927" target="_blank">
              <i className="fa fa-github mx-4"></i>
            </a>
            <a href="https://www.linkedin.com/in/piyush-padia-a47766215/" target="_blank">
              <i className="fa fa-linkedin mx-4"></i>
            </a>
            <a href="https://www.instagram.com/piyush_padia/" target="_blank">
              <i className="fa fa-instagram mx-4"></i>
            </a>
            <a href="https://twitter.com/piyushpadia12" target="_blank">
              <i className="fa fa-twitter mx-4"></i>
            </a>
          </div>
    </footer>
  </div>
  );
}

export default App;
