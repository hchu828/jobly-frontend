import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import "./JoblyApp.css"


function JobList() {
  const [jobList, setJobList] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchJobList() {
    async function fetchList() {
      const jobs = (filterBy === null)
        ? await JoblyApi.getJobList()
        : await JoblyApi.getJobFilterList(filterBy);
      setJobList(jobs);
      setIsLoading(false);
    }
    fetchList();
  }, [filterBy]);


  if (isLoading) {
    return <i>Loading...</i>;
  }

  function updateFilterBy(filterData) {
    setFilterBy(filterData);
  }


  return (
    <main className="JoblyApp">
      <SearchForm updateFilterBy={updateFilterBy} />
      <JobCardList jobList={jobList} isCompanyJob={false} />

    </main>
  );
}

export default JobList;