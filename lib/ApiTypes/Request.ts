import { integrationType, repoOwner } from '../../../repex-backend/lib/interfaces/Integration';

export namespace AppRequest {
  export interface LoginUser {
    email: string;
    password: string;
  }

  export interface UserIntegrationData {
    integrationType: integrationType;
    repositoryName: string;
    repositoryId: string;
    repositoryOwner: repoOwner;
  }

  export interface UserPersonData {
    firstName: string;
    lastName: string;
  }
}

export namespace GithubRequest {
  export interface Issue {
    title: string;
    body: string;
    imageBase64: string;
  }
}
