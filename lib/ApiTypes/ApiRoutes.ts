import { UserRequest, IssueRequest } from './Request';
import { IssueResponse, UserResponse, GithubResponse, Errors } from './Response';

export type ApiRoutes = {
    // POST
    '/api/v1/user/login': { type: 'POST', payload: UserRequest.ILoginUser, response: UserResponse.LoginUser }

    '/api/v1/user/person/update': { type: 'POST', payload: UserRequest.IUserPersonData, response: UserResponse.PersonDataSaved }

    '/api/v1/issue/create': { type: 'POST', payload: IssueRequest.IIssue, response: IssueResponse.CreateIssue }

    '/api/v1/user/integration/update': { type: 'POST', payload: UserRequest.IUserIntegrationData, response: UserResponse.IntegrationSaved }

    // GET
    '/api/v1/github/repo': { type: 'GET', payload: null, response: GithubResponse.ListRepo }

    '/api/v1/user/logout': { type: 'GET', payload: null, response: UserResponse.LoginUser }

    '/api/v1/user/issues': { type: 'GET', payload: IssueRequest.IFilteredIssues, response: IssueResponse.ListIssues }
}
