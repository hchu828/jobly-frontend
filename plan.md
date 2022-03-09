React Jobly Component Hierarchy

App

	Nav											        Displays 3 NavLinks to home, companies, jobs
	  props=none
	  state=none

	Routes:
		<Switch>
			<Route exact path="/">
				<Home/ >
			</Route>
			<Route exact path="/companies">
				<CompaniesLise/ >
			</Route>
			<Route exact path="/jobs">
				<JobsList/ >
			</Route>
			<Route exact path="/companies/:companyHandle">
				<Company/ >
			</Route>
			<Redirect to="/">
		</Switch>

	

		HomePage								         Presentational
		  prop: none
		  state: none

		CompanyList								  Show a list of filtered companies (default is all)
		  prop: 	none 
		  state: 	(AJAX request) => filtered list  of companies (default: the whole list of companies) { list.map -> Company route} 
		  			searchParams
		  			
					

		CompanyDetail								      Show company details with list of CompanyJobs
			prop: companyHandle
			state: {Company} { Company.jobs.map -> Job} (AJAX request)

			CompanyJob							  Presentational
				prop: {Company.jobs}

		JobList									    Show a list of filtered jobs (default is all)
			prop: list of all jobs
		    state: (AJAX request) => filtered  list of jobs { list.map -> Job}

			Job									        Presentational
			  prop: {Job} 

			  JobCardList
			  SearchForm
			  JobCard
			  JoblyAPI

	
