import React from "react";
import { Layout } from "antd";
import { Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const HeaderCpt = ({ theme }) => {
  return (
    <Header>
      <Title style={{ color: "white" }}>Jobs for Junior Devs</Title>
    </Header>
  );
};

export default HeaderCpt;
