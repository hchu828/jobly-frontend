import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companyList, setCompanyList] = useState(null);
  const [filterBy, setFilterBy] = useState(null);

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

  return (
    <main>
      <SearchForm />
      {companyList.map(company =>
        <CompanyCard
          key={company.handle}
          company={company}
        />
      )}
    </main>
  );
}

export default CompanyList;