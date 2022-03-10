import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import "./JoblyApp.css"
import "./Card.css"


/** Presentational of company details(company name, description and jobs)
 * 
 * props: none
 * 
 * state:
 *  - company: an object, like
 *        {handle, name, description, numEmployees, logoUrl, jobs}
 * 
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  // get back a single company, and update company state
  useEffect(function fetchCompanyDetail() {
    async function fetchCompany() {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
    }
    fetchCompany();
  }, [handle]);
  // if params changes, but useEffect just run once after first render


  if (!company) {
    return <i>Loading...</i>;
  }

  return (
    <div className="JoblyApp">
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