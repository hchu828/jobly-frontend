React Jobly Component Hierarchy

App

	Nav											        Displays 3 NavLinks to home, companies, jobs
	  props=none
	  state=none

	JoblyApp										    Controls which component to render		
	  state: (home, companies, jobs)
	  state: list (two states or one state for lists)
	      pass down setState handler

		HomeList(presentational)
		  prop: none

		CompaniesList								  Show a list of filtered companies (default is all)
		  prop: 	list of all companies 
		  state: 	filtered list  of companies (params) { list.map -> Company w/ link}

			Company								      Show company details with list of CompanyJobs
			  prop: companyHandle
			  state: {Company} { Company.jobs.map -> Job}
	
				CompanyJob							  Presentational
					prop: {Company.jobs}

		JobsList									    Show a list of filtered jobs (default is all)
			prop: list of all jobs
		  state: filtered  list of jobs { list.map -> Job}

			Job									        Presentational
			  prop: {Job} 


useEffect(function getList() {
{ AJAX for company or job}   

if(state === home)} {do nothing} 
else (AJAX for company or job function}

, [state])
