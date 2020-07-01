import React, { useState, useEffect } from "react";
import { Pagination } from "antd";

function PaginationCpt({ jobs, setJobs, perrPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const onChange = (page, perPage) => {
    console.log(page);
    setCurrentPage(page);
    console.log(perPage);
    let offset = (page - 1) * perPage;
    setJobs(jobs.slice(offset, offset + perPage));
  };

  const onPageSizeChange = (current, pageSize) => {
    setCurrentPage(current);
    setPerPage(pageSize);
    onChange(current, pageSize);
  };

  useEffect(() => {
    onChange(currentPage, perrPage);
  }, [jobs]);

  return (
    <Pagination
      current={currentPage}
      onChange={onChange}
      onShowSizeChange={onPageSizeChange}
      pageSize={perPage}
      total={jobs.length}
      hideOnSinglePage
    />
  );
}

export default PaginationCpt;
