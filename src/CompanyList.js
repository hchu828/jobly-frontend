import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companyList, setCompanyList] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchCompanyList() {
    async function fetchList() {
      const companies = (filterBy === null)
        ? await JoblyApi.getCompanyList()
        : await JoblyApi.getCompanyFilterList(filterBy);
      setCompanyList(companies);
      setIsLoading(false);
      console.log("companyList:", companies);
    }
    fetchList();
  }, [filterBy]);

 
  if(isLoading) {
    return <i>Loading...</i>;
  }

  return (
    <main>
      <SearchForm />
      {companyList.map(company =>
        <CompanyCard company={company} key={company.handle} />
      )}
    </main>
  );
}

export default CompanyList;