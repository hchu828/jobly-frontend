import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import "./JoblyApp.css"

/** Show the search form and a list of companies
 * 
 * props: none
 * 
 * state:
 *  - companyList: an array of company object, like 
 *      [{handle, name, description, numEmployees, logoUrl}...]
 *  filterBy: a string that user input for searching, like "hall"
 * 
 * Routes -> CompanyList -> (SearchForm, CompanyCard)
 */

function CompanyList() {
  const [companyList, setCompanyList] = useState(null);
  const [filterBy, setFilterBy] = useState(null);


  // get back a list of companies and update companyList state
  useEffect(function fetchCompanyList() {
    async function fetchList() {
      const companies = (filterBy === null)
        ? await JoblyApi.getCompanyList()
        : await JoblyApi.getCompanyFilterList(filterBy);
      setCompanyList(companies);
    }
    fetchList();
  }, [filterBy]);


  if (!companyList) {
    return <i>Loading...</i>;
  }

  //update the filterBy with the search input
  function updateFilterBy(filterData) {
    setFilterBy(filterData);
  }

  return (
    <section className="JoblyApp">
      <SearchForm updateFilterBy={updateFilterBy} />
      {companyList.map(company =>
        <CompanyCard
          key={company.handle}
          company={company}
        />
      )}
    </section>
  );
}

export default CompanyList;