import React from "react";
import styled from "styled-components";
import TaskTemplate from "../templates/TaskTemplate";

const PageTitle = styled.h1`
  color: #3700b3;
`;

const Home: React.FC = () => (
  <div style={{ padding: "20px" }}>
    <PageTitle>To-Do List</PageTitle>
    <TaskTemplate />
  </div>
);

export default Home;
