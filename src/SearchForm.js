import { useState } from "react";

/** Showing the search form, and storing user input
 * 
 * props:
 *  - updateFilterBy: function passed down from the CompanyList
 * 
 * state: none
 * 
 * (CompanyList, JobList) -> SearchForm
 */
function SearchForm({ updateFilterBy }) {
  const [formData, setFormData] = useState("");

  console.log("form data", formData);

  function handleSubmit(evt) {
    evt.preventDefault();
    updateFilterBy(formData);   
  }

  function handleChange(evt) {
    const name = evt.target.value;
    setFormData(name);
  }


  return (
    <form onSubmit={handleSubmit}>
      
      <input 
        name="searchForm"
        placeholder="Enter search term..."
        value={formData}
        onChange={handleChange}
      />
     
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;