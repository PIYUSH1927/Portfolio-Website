import React from "react";
import "./testimonials.css";

export default function testimonials() {
    const testimonials = [
    {
        name: "Person 1",
        text:
        "lordashfh fash afsf sdf fagbfd ja fs fajkaf fa dsfh fa fdsahf fafh fdhf hsdaf "
    },
    {
        name: "Person 1",
        text:
        "lordashfh fash afsf sdf fagbfd ja fs fajkaf fa dsfh fa fdsahf fafh fdhf hsdaf "
    },
    {
        name: "Person 1",
        text:
        "lordashfh fash afsf sdf fagbfd ja fs fajkaf fa dsfh fa fdsahf fafh fdhf hsdaf "
    },
];
return (
    <>
      <div>
          <div className="row mx-5">
              {testimonials.map((value) => {
                  return (
                  <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                      <div className="card shadow testimonial-card d-flex flex-column">
                          <span className="description">{value.text}</span>
                          <span className="stars">⭐⭐⭐⭐⭐</span>
                          <span className="name1">{value.name}</span>
                  </div>
               </div>
              );
          })}
          </div>
      </div>
      </>
      );

  }
