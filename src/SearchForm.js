import { useState } from "react";
import "./SearchForm.css";

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

      <div className="input-group">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter search term.."
            aria-label="search term"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
        </div>
        <div className="input-group-append">
          <button class="btn btn-primary btn-outline-secondary text-white" type="submit">Submit</button>
        </div>
      </div >

      {/* <input
        className="input"
        name="searchForm"
        placeholder="Enter search term..."
        value={formData}
        onChange={handleChange}
        aria-describedby="basic-addon2"
      /> */}

      {/* <button className="btn btn-primary">Submit</button> */}
    </form >
  );
}

export default SearchForm;