React Jobly Component Hierarchy

App
	props: none
	state: user

	Nav											        Displays 3 NavLinks to home, companies, jobs, profile, logout(if user login)
	home, login, signup(if user not login)
	  props=none
	  state=none

	Routes


	Routes:
		<Switch>
			<Route exact path="/">
				<Homepage/ >
			</Route><Route exact path="/">
				<Homepage/ >
			</Route>
			<Route exact path="/login">
				<Login/ >
			</Route>
			<Route exact path="/signup">
				<Signup/ >
			</Route>
			<Route exact path="/profile">
				<Profile/ >
			</Route>
			<Route exact path="/login">
				<Login/ >
			</Route>
			<Route exact path="/signup">
				<Signup/ >
			</Route>
			<Route exact path="/profile">
				<Profile/ >
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
		  state: user
		  <UserContext.Provider >
		  	<LoginForm />
			<UserDetailForm />
		  </UserContext.Provider >
		  

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
			props: fn from Login component to update the login info.
			state: formData

		UserDetailForm:                   Show a form and update form data
		    props: fn from Signup component and Profile component
			state: formData
				if(user === null) signup form data
				else profile form
		

		
		Login                             update userContext
			props:none
			state: user
			<UserContext.Provider value={user}>
				<LoginForm />
			<UserContext.Provider />

		Signup							  update userContext
			props: none
			state: user
			<UserContext.Provider value={user}>
				<UserDetailForm />
			<UserContext.Provider />

		Profile							  update userContext
			props: none
			state: user

			<UserContext.Provider value={user}>
				<UserDetailForm />
			<UserContext.Provider />

		Logout									
			props: none
			state: user(change userContext from user info to null)


		userContext                       create context
			props: none
			state: none
			       

		








	
