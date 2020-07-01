import React from "react";
import { AutoComplete } from "antd";

const { Option } = AutoComplete;

const LocationFilter = ({ jobs, setFiltredJobs }) => {
  const onSearch = (searchText) => {
    const filtredJobs = jobs.filter((job) => {
      const location = job.location.toLowerCase();
      if (location.includes(searchText)) {
        return true;
      }
      return false;
    });
    setFiltredJobs(filtredJobs);
  };
  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onChange={onSearch}
      placeholder="input here"
    >
      {jobs.map((job) => (
        <Option key={job.id} value={job.location}>
          {job.location}
          {console.log(job.location)}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default LocationFilter;
