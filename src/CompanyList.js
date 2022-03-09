import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JoblyApi from "./JoblyApi";

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

  return (
    <main>
      <SearchForm />
      {

      }
    </main>
  );
}

export default CompanyList;