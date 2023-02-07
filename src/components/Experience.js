import React from "react";
import Navbar from "./Navbar";
import ExpCard from "./ExpCard";
import styled from "styled-components";

function Experience() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ExpCard
          title={"Internship"}
          company={"TIP Community"}
          duration={"5-Nov-2021 to 5-Dec-2021"}
          discription={
            "In this remote internship I have worked with a team of 5 developers, my role in this team is Fontend Developer, in this 1 month we have created two websites and deployed them, in this internship I have learned how to work remotely, how to contribute in a team, how to plan and build projects"
          }
        />
      </div>
    </div>
  );
}

export default Experience;
