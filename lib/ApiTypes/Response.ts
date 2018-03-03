import * as t from 'io-ts';
import { EVENT, IOEVENT } from '../Events';

export namespace UserResponse {
  export const IOLoginUser = t.interface({
    type: t.literal('data'),
    email: t.string,
    token: t.string
  });
  export type ILoginUser = t.TypeOf<typeof IOLoginUser>;

  export const IOUser = t.interface({
    type: t.literal('data'),
    email: t.string
  });
  export type IUser = t.TypeOf<typeof IOUser>

  export const IOIntegrationSaved = t.interface({
    type: t.literal('data'),
    status: t.boolean,
  });
  export type IIntegrationSaved = t.TypeOf<typeof IOIntegrationSaved>;

  export const IOPersonDataSaved = t.interface({
    type: t.literal('data'),
    status: t.boolean,
  });
  export type IPersonDataSaved = t.TypeOf<typeof IOPersonDataSaved>;

  export type IntegrationSaved = IIntegrationSaved | Errors.AnyResponseError;
  export type LoginUser = ILoginUser | Errors.AnyResponseError;
  export type User = IUser | Errors.AnyResponseError;
  export type PersonDataSaved = IPersonDataSaved | Errors.AnyResponseError;
}

export namespace IssueResponse {
  // CREATE
  export const IOCreateIssue = t.interface({
    type: t.literal('data'),
    id: t.string
  });
  export type ICreateIssue = t.TypeOf<typeof IOCreateIssue>;

  export type CreateIssue = ICreateIssue | Errors.AnyResponseError;

  // GET
  export const IOIssue = t.interface({
    _id: t.any,
    title: t.string,
    body: t.string,
    imageBase64: t.string,
    events: t.array(IOEVENT)
  });

  export const IOListIssue = t.interface({
    type: t.literal('data'),
    issues: t.array(IOIssue)
  })

  export type IIssue = t.TypeOf<typeof IOIssue>;
  export type IListIssue = t.TypeOf<typeof IOListIssue>;

  export type Issue = IIssue | Errors.AnyResponseError;
  export type ListIssues = IListIssue | Errors.AnyResponseError;
}

export namespace GithubResponse {
  export const IORepo = t.interface({
    id: t.number,
    owner: t.interface({
      login: t.string,
      id: t.number,
    }),
    name: t.string,
    full_name: t.string,
    description: t.string,
  });

  export const IORepoResponse = t.interface({
    type: t.literal('data'),
    repositories: t.array(IORepo)
  })

  export type IRepo = t.TypeOf<typeof IORepo>;
  export type IRepoResponse = t.TypeOf<typeof IORepoResponse>
  export type ListRepo = IRepoResponse | Errors.AnyResponseError;
}

export namespace Errors {
  export const IOResponseError500 = t.interface({
    type: t.literal('error'),
    message: t.string,
    statusCode: t.literal('500')
  });
  export type IResponseError500 = t.TypeOf<typeof IOResponseError500>;

  export const IOResponseError400 = t.interface({
    type: t.literal('error'),
    message: t.string,
    statusCode: t.literal('400')
  });
  export type IResponseError400 = t.TypeOf<typeof IOResponseError400>;

  export type AnyResponseError = IResponseError400 | IResponseError500;
}
