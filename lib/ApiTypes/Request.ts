import * as t from 'io-ts';
import { TypeOf } from 'io-ts';
import { EVENT } from '../Events';

export namespace AppRequest {
  //Login user request types
  export const IOLoginUser = t.interface({
    email: t.string,
    password: t.string
  });
  export type ILoginUser = t.TypeOf<typeof IOLoginUser>;

  // User Integration update request types
  export const IntegrationTypeUnion = t.union([
    t.literal(""),
    t.literal("Github"),
    t.literal("Trello"),
    t.literal("TargetProcess"),
    t.literal("BitBucket")
  ]);

  export const IOUserIntegrationData = t.interface({
    integrationType: IntegrationTypeUnion,
    repositoryName: t.string,
    repositoryId: t.string,
    repositoryOwner: t.interface({
      login: t.string,
      id: t.number,
    }),
  });
  export type IUserIntegrationData = t.TypeOf<typeof IOUserIntegrationData>;

  // User person data update request
  export const IOUserPersonData = t.interface({
    firstName: t.string,
    lastName: t.string,
  });
  export type IUserPersonData = t.TypeOf<typeof IOUserPersonData>;
}

export namespace GithubRequest {
  export const IOIssue = t.interface({
    title: t.string,
    body: t.string,
    imageBase64: t.string,
    events: t.array(EVENT)
  });
  export type IIssue = t.TypeOf<typeof IOIssue>;
}
