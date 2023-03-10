import React from "react";
import Navbar from "./Navbar";
import ExpCard from "./ExpCard";

function Experience() {
  const data = [
    {
      title: "Intern",
      company: "TIP Community",
      duration: "5-Nov-2021 to 5-Dec-2021",
      description:
        "In this remote internship I have worked with a team of 5 developers, my role in this team is a Fontend Developer, in this 1 month we have created two websites and deployed them, in this internship I have learned how to work remotely, how to contribute in a team, how to plan and build projects",
    },
    {
      title: "Full stack Developer",
      company: "none",
      duration: "Jan-2022 to July-2022",
      description:
        "I began freelancing with my four friends, looking for projects on online platforms. My role in this team is full stack developer. We built so many projects together that I learned how to deal with clients and communicate with clients, as well as how unit economics works in projects. ",
    },
    {
      title: "MERN stack Developer",
      company: "New Xtended Technology",
      duration: "Aug-2022 to Present",
      description:
        "After polishing my coding skills by freelancing, I have joined New Xtended Technology in Bhilwara.Here I get the chance to work with experienced Java, Dot Net, and Android developers. Here I am working as a MERN stack developer. Here I have learned how to build projects with hybrid technologies. ",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container">
        {data.map((x) => (
          <div>
            <ExpCard
              title={x.title}
              company={x.company}
              duration={x.duration}
              discription={x.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
