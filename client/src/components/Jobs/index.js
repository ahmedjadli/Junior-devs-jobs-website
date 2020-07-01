import React, { useState } from "react";
import Job from "../Job";
import { List, Avatar, Button } from "antd";
import styled from "styled-components";
import Modal from "../Modal";
import moment from "moment";

const ListItem = styled(List.Item)`
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }
`;

const Jobs = ({ jobs, total }) => {
  const [modalProps, setModalProps] = useState({ open: false, job: {} });
  console.log(jobs);
  return (
    <div>
      Found {total} jobs
      <List
        dataSource={jobs}
        renderItem={(job) => (
          <ListItem
            onClick={() => {
              setModalProps({ open: true, job: job });
            }}
            key={job.id}
          >
            <List.Item.Meta
              avatar={<Avatar src={job.company_logo} />}
              title={job.title}
              description={job.company}
            />
            <div>
              {moment(job.created_at).format("MMMM Do YYYY [at] h:mm a")}
            </div>
          </ListItem>
        )}
      ></List>
      <Modal modalProps={modalProps} setModalProps={setModalProps} />
    </div>
  );
};

export default Jobs;
