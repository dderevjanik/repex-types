export namespace AppResponse {
    export interface LoginUser {
        email: string
        token: string
    }

    export interface User {
        email: string
    }
}

export namespace Errors {
    export interface ResponseError500 {
        message: string,
        statusCode: '500'
    }
    export interface ResponseError400 {
        message: string;
        statusCode: '400';
    }
}
