import React from "react";
import './Programming.css';

export default function Programming() {
    const value = [
     {
        text: "C++",
        percentage: 80
    },
    {
        text: "Python",
        percentage: 80
    },
    {
        text: "Javascript",
        percentage: 80
    },
    {
        text: "C",
        percentage: 80
    },
    {
        text: "Node JS",
        percentage: 80
    },
    {
        text: "React JS",
        percentage: 80
    },
    {
        text: "HTML",
        percentage: 80
    },
    {
        text: "CSS",
        percentage: 80
    },
    {
        text: "NEXT JS",
        percentage: 80
    },
    {
        text: "Tailwind CSS",
        percentage: 80
    }
];
    return ( 
    <>
    <div>
        <div className="row">
            {value.map((value,index)=>{
                return <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                    <span className="language">{value.text} </span>
                    <div className="progress-some">
                        <div className="progress-new" ></div>
                    </div>
                </div>
                </>
            })}
        </div>
    </div>
    </>
    );
}