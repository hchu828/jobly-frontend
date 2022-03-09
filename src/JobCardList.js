import JobCard from "./JobCard";

function JobCardList({ jobList }) {
    return (
        <div>
            {jobList.map(job =>
                <JobCard job={job} key={job.id} />)}
        </div>

    );
}

export default JobCardList;