import { AppRequest, GithubRequest } from './Request';
import { AppResponse, GithubResponse, Errors } from './Response';

export type ApiRoutes = {
    // POST
    '/api/v1/user/login': { type: 'POST', payload: AppRequest.ILoginUser, response: AppResponse.LoginUser }

    '/api/v1/person/update': { type: 'POST', payload: AppRequest.IUserPersonData, response: AppResponse.PersonDataSaved }

    '/api/v1/issue/create': { type: 'POST', payload: GithubRequest.IIssue, response: GithubResponse.CreateIssue }

    '/api/v1/integration/update': { type: 'POST', payload: AppRequest.IUserIntegrationData, response: AppResponse.IntegrationSaved }

    // GET
    '/api/v1/github/repo': { type: 'GET', payload: null, response: GithubResponse.ListRepo }
}

export type Endpoints = {
    [R in keyof ApiRoutes]: (payload: ApiRoutes[R]['payload']) => ApiRoutes[R]['response']
}
