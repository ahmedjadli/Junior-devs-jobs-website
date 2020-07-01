import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import LocationFilter from "./locationFilter";
const { Title } = Typography;
const Container = styled.div`
  margin: 10px;
  background-color: lightGray;
  padding: 10px;
`;
const Filters = ({ jobs, setFiltredJobs }) => {
  return (
    <Container>
      <Title level={3}>Filter by :</Title>
      <LocationFilter jobs={jobs} setFiltredJobs={setFiltredJobs} />
    </Container>
  );
};

export default Filters;
