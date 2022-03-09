import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const params = useParams();

  useEffect(function fetchCompanyDetail() {
    async function fetchCompany() {
      const companyData = await JoblyApi.getCompany(params.handle);
      setCompany(companyData);
    }
    fetchCompany();
  }, []);

  if (!company) {
    return <i>Loading...</i>;
  }

  return (
    <div>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <JobCardList
        jobList={company.jobs}
        isCompanyJob={true}
      />
    </div>

  );
}

export default CompanyDetail;