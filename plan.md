React Jobly Component Hierarchy

App
	props: none
	state: user
	TODO: logout fn, handle it down to Logout component
	      login fn, handle it down to Login component
		  singup fn, handle it down to signup component
		  profile fn,

	Nav											        Displays 3 NavLinks 
	home, companies, jobs, profile, logout(if user login)
	home, login, signup(if user not login)
	  props=none
	  state=none

	Routes


	Routes:
		<Switch>
			
			</Route><Route exact path="/">
				<Homepage/ >
			</Route>
			<Route exact path="/login">
				<LoginForm / >
			</Route>
			<Route exact path="/signup">
				<SignupForm />
			</Route>
			<Route exact path="/profile">
				<ProfileForm / >
			</Route>
			<Route exact path="/companies">
				<CompaniesList/ >
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

		  Login, signup buttons(if not login)
		  add one line of context(if login)

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

		LoginForm:                        Show a form and update the login data
			props: fn from App component to update the login info.
			state: formData

		SignupForm:                   Show a form and update form data
		    props: fn from App component
			state: formData
				

		ProfileForm:
			 props: fn from App component
			state: formData


		userContext                       create context
			props: none
			state: none
			       

        update JoblyApi to for login and signup, store Token



		








	
