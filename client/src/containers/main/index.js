import React, { useState, useEffect } from "react";
import Filters from "../../components/filters";
import Jobs from "../../components/Jobs";
import PaginationCpt from "../../components/Pagination";
import axios from "axios";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const fetchJobs = (sj) => {
  axios
    .get("/api/jobs")
    .then((res) => {
      if (!res.data.success) return res.data.err;
      return res.data.data;
    })
    .then((data) => {
      sj(data);
    })
    .catch((err) => console.error(err));
};

const Main = () => {
  const [jobsList, setJobsList] = useState([]);
  const [filtredJobs, setFiltredJobs] = useState([]);
  useEffect(() => {
    fetchJobs(setJobsList);
  }, []);
  return (
    <Layout>
      <Sider width={400} theme="light">
        <Filters jobs={jobsList} setFiltredJobs={setFiltredJobs} />
      </Sider>
      <Content>
        <Jobs total={jobsList.length} jobs={filtredJobs} />
        <PaginationCpt perrPage={20} jobs={jobsList} setJobs={setFiltredJobs} />
      </Content>
    </Layout>
  );
};

export default Main;
