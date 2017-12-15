import { integrationType } from '../../../repex-backend/lib/interfaces/Integration';

export namespace AppRequest {
    export interface LoginUser {
        email: string
        password: string
    }

    export interface UserIntegrationData {
        integrationType: integrationType,
        repositoryName: string,
        repositoryId: string
    }
}
