import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN

  static UserToken = "";

  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.UserToken}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. 
   * 
   * accepts: companyHandle (string)
   * 
   * returns Company object like 
   * {handle, name, description, numEmployees, logoUrl, jobs}
  */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get an array of companies
  * 
  * returns array of Company objects, like [Company, ...]
  * where Company is {handle, name, description, numEmployees, logoUrl}
 */
  static async getCompanyList() {
    const res = await this.request(`companies`);
    return res.companies;
  }

  /** Get the filtered array of companies by name
   * 
   * accepts: name (string), where name is ILIKE of company name in db
   * 
   * returns array of Company objects, like [Company, ...]
   * where Company is {handle, name, description, numEmployees, logoUrl}
   */
  static async getCompanyFilterList(name) {
    const res = await this.request("companies", { name });
    return res.companies;
  }

  /** Get an array of jobs
  * 
  * returns array of Job objects, like [Job, ...]
  * where Job is {id, title, salary, equity, companyHandle, companyName}
 */
  static async getJobList() {
    const res = await this.request("jobs");
    return res.jobs;
  }

  /** Get the filtered array of jobs by title
   * 
   * accepts: title(string), where title is ILIKE of Job title in db
   * 
   * returns array of Job objects, like [Job, ...]
   * where Job is {id, title, salary, equity, companyHandle, companyName}
   */
  static async getJobFilterList(title) {
    const res = await this.request("jobs", { title });
    return res.jobs;
  }

  /** Get token by (username, password) if authenticated
   * 
   *  accepts: username(string), password(string)
   * 
   * return: token(string)
   */
  static async login({ username, password }) {
    const data = { username, password };
    const res = await this.request("auth/token", data, "post");
    JoblyApi.UserToken = res.token;
    return JoblyApi.UserToken;
  }

  /** Get user by a token
   * 
   * accepts: token(string)
   * 
   * return: user object,
   * where User is { username, firstname, lastname, email, isAdmin, jobs}
   * where jobs is [{id, title, companyHandle, companyName, state}]
   */
  static async getUser(token) {
    const { username } = jwt_decode(token);
    const res = await this.request(`users/${username}`, { token });
    return res.user;
  }

  /** Register new user
   * 
   * accepts: object like {
   *  username (string),
   *  password (string),
   *  firstName (string),
   *  lastName (string),
   *  email (string)
   *  }
   * 
   * returns: token(string)
   *
   */
  static async registerUser({ username, password, firstName, lastName, email }) {
    const data = { username, password, firstName, lastName, email };
    const res = await this.request("auth/register", data, "post");
    JoblyApi.UserToken = res.token;
    return JoblyApi.UserToken;
  }

  /** Edit user details 
   * 
   * accepts: 
   *  username (string),
   *  firstName (string),
   *  lastName (string),
   *  email (string)
   * 
   * returns User object 
   * where User is { username, firstname, lastname, email, isAdmin, jobs}
   * where jobs is [{id, title, companyHandle, companyName, state}]
   */
  static async editUser(username, firstName, lastName, email) {
    const data = { firstName, lastName, email };
    const res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default JoblyApi;
