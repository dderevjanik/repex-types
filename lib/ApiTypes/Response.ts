import { repoOwner } from "../../../repex-backend/lib/interfaces/Integration";

export namespace AppResponse {
    export interface ILoginUser {
        email: string
        token: string
    }

    export interface IUser {
        email: string
    }

    export type LoginUser = ILoginUser | Errors.AnyResponseError;
    export type User = IUser | Errors.AnyResponseError;
    export type IntegrationSaved = true | Errors.AnyResponseError
    export type PersonDataSaved = true | Errors.AnyResponseError
}

export namespace GithubResponse {
    export interface IRepo {
        id: number,
        owner: repoOwner,
        name: string,
        full_name: string,
        description: string,
    }

    export type ListRepo = IRepo[] | Errors.AnyResponseError;
}

export namespace Errors {
    export interface IResponseError500 {
        message: string,
        statusCode: '500'
    }
    export interface IResponseError400 {
        message: string;
        statusCode: '400';
    }

    export type AnyResponseError = IResponseError400 | IResponseError500;
}
