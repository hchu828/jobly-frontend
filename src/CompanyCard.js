
/** Presentational component for showing a company
 * 
 * props: none
 * 
 * state: none
 * 
 * CompanyList -> CompanyCard
 */
function CompanyCard({company}) {
    return (
        <div>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            {company.logoUrl && 
             <img src={company.logoUrl} alt={`${company.name} logo`}/>
            }
        </div>
    );
}

export default CompanyCard;