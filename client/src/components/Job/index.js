import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "../Modal";
import Link from "@material-ui/core/Link";

const StyledCard = styled(Paper)`
  padding: 20px;
  margin: 10px;
  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`;

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Grid item lg={12} style={{ backgroundColor: "red", width: "200%" }}>
        <StyledCard onClick={() => setOpen(true)}>
          <Typography variant="h6">{job.title}</Typography>
          <br />
          <span>
            <strong>Type : </strong>
            {job.type}
          </span>
          <br />

          <span>
            <strong>Company : </strong>
            <Link href={job.company_url} target="_blank">
              {job.company}
            </Link>
          </span>
        </StyledCard>
      </Grid>
      <Modal job={job} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Job;
