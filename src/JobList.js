import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";


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
  return (
    <main>
      <SearchForm />
      <JobCardList jobList={jobList} />

    </main>
  );
}

export default JobList;