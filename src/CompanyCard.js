import { Link } from "react-router-dom";
import "./Card.css"

/** Presentational component for showing a company
 * 
 * props: none
 * 
 * state: none
 * 
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <Link to={`companies/${company.handle}`} >
      <section className="Card">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        {
          company.logoUrl &&
          <img src={company.logoUrl} alt={`${company.name} logo`} />
        }
      </section>
    </ Link >
  );
}

export default CompanyCard;