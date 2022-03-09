import JobCard from "./JobCard";

function JobCardList({ jobList, isCompanyJob }) {
  console.log(jobList)
  return (
    <div>
      {jobList.map(job =>
        <JobCard
          job={job}
          isCompanyJob={false}
          key={job.id}
        />)}
    </div>

  );
}

export default JobCardList;