import React, { useState,useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
export default function Contact(){
    const[name, setname]=useState("");
    const[email, setemail]=useState("");
    const[message, setmessage]=useState("");
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        //console.log(e);
     
     console.log(form.current);
     const templateparams = {
        from_name: name + " " + email,
        to_name: "padiapiyush12@gmail.com",
        feedback: message
        
     };
       emailjs
       .send("service_nrq6l6r","template_qwb8q1c",templateparams,"T6fMoS5OpSIsgrYzK")
       .then(function(response){
        console.log("SUCCESS!",response.status ,response.text);
        window.location.reload();
       }
       
       ,
       function(error){
        console.log("FAILED...",error);
       }
       );
       
    };
    

    return (
    <>
    <div>
        <div className="contact-me-card row">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                <span className="get-in-touch mx-4 my-5">Get in touch</span>

                <div className="py-5 d-flex justify-content-center">

                <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_yPKMfX.json"  background="transparent"  speed="1"  style={{width: "400px"}}  loop autoplay></lottie-player>
                </div>
            </div>

            <div className='col-lg-6 col-md-5 col-sm-12 my-auto'>
                <form ref={form} className="d-flex flex-column card-contact-right" onSubmit={sendEmail}>
                    
                    <div className='input-group my-3 d-flex flex-column'>
                        <label> Name </label>
                        <input 
                        vlaue={name}
                        onChange={(e)=>{
                            setname(e.target.value) ;
                        }}
                        type="text" placeholder='enter your name' required className='input-groups' />
                    </div>
                    <div className='input-group my-3 d-flex flex-column'>
                        <label>Email </label>
                        <input 
                         value={email}
                         onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        type="text" placeholder='enter your email' required className='input-groups' />
                    </div>
                    <div className='input-group my-3 d-flex flex-column'>
                        <label> Message </label>
                        <textarea 
                        value={message}
                        onChange={(e)=>{
                            setmessage(e.target.value);
                        }}
                        type="text" placeholder='enter your message' required className='input-groups' />
                    </div>
                    <div className='input-group my-3 d-flex flex-column'>
                        <input className='btn btn-success' type="submit" value="Send Message"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    );
}