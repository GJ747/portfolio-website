import React from "react";
import Navbar from "./Navbar";
import ProCard from "./ProCard";

function Project() {
  const pro = [
    {
      title: "Color textile",
      category: "Accounting, inventory management, reports",
      discription:
        "This web application was developed for the textile industry, it can create masters of company, spares, groups, and yarn, generate POs and purchases, and manage inventory of raw materials and spare parts. it can create reports of all provided data",
    },
    {
        title: "Ashwamegh",
        category: "Algo Trading",
        discription : "This is my biggest project so far. It is an algo trading platform that is used to trade in futures, options, and currencies. In this project, we have to do so many mathematical calculations and work with so many APIs."
    },
    {
        title: "Just print",
        category: "Accounting, reports",
        discription: "This web application was created for the print media industry to generate reports and bills for merchants."
    },
    {
        title: "Shree Nakoda Explosives",
        category: "Accounting, reporting, inventory management",
        discription: "This web application was developed for the explosives and mining industries. It is used to create bills and for inventory management purposes."
    }
  ];
  return (
    <div>
      <Navbar />
     
      <div className="container">
      <p style={{color:"white", textAlign:"center",marginTop:"20px"}}>In my career, I get the chance to work on so many websites and web applications, here are some of my biggest projects so far.</p>
        {pro.map(x=><ProCard title={x.title} category={x.category} discription={x.discription}/>)}
      </div>
    </div>
  );
}

export default Project;
