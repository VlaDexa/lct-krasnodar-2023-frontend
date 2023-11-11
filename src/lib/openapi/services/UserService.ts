/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_for_token_api_v1_user_token_post } from '../models/Body_login_for_token_api_v1_user_token_post';
import type { LogoutResponse } from '../models/LogoutResponse';
import type { TokensOut } from '../models/TokensOut';
import type { UpdateTokensIn } from '../models/UpdateTokensIn';
import type { UserBase } from '../models/UserBase';
import type { UserShow } from '../models/UserShow';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Register
     * @param requestBody
     * @returns TokensOut Successful Response
     * @throws ApiError
     */
    public static registerApiV1UserRegisterPost(
        requestBody: UserBase,
    ): CancelablePromise<TokensOut> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/user/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `User already exists error`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Login For Token
     * @param formData
     * @returns TokensOut Successful Response
     * @throws ApiError
     */
    public static loginForTokenApiV1UserTokenPost(
        formData: Body_login_for_token_api_v1_user_token_post,
    ): CancelablePromise<TokensOut> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/user/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Logout
     * @returns LogoutResponse Successful Response
     * @throws ApiError
     */
    public static logoutApiV1UserLogoutPost(): CancelablePromise<LogoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/user/logout',
        });
    }

    /**
     * Update Tokens
     * @param requestBody
     * @returns TokensOut Successful Response
     * @throws ApiError
     */
    public static updateTokensApiV1UserUpdateTokensPost(
        requestBody: UpdateTokensIn,
    ): CancelablePromise<TokensOut> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/user/update-tokens',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token type / Token already revoked`,
                401: `Invalid token`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get User
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserApiV1UserGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/user/',
        });
    }

    /**
     * Delete User
     * @param userId
     * @returns UserShow Successful Response
     * @throws ApiError
     */
    public static deleteUserApiV1UserDelete(
        userId: string,
    ): CancelablePromise<UserShow> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/user/',
            query: {
                'user_id': userId,
            },
            errors: {
                404: `User not found error`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Revoke Admin Privilege
     * @param email
     * @returns UserShow Successful Response
     * @throws ApiError
     */
    public static revokeAdminPrivilegeApiV1UserAdminPrivilegeDelete(
        email: string,
    ): CancelablePromise<UserShow> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/user/admin_privilege',
            query: {
                'email': email,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Grant Admin Privilege
     * @param email
     * @returns UserShow Successful Response
     * @throws ApiError
     */
    public static grantAdminPrivilegeApiV1UserAdminPrivilegePatch(
        email: string,
    ): CancelablePromise<UserShow> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/user/admin_privilege',
            query: {
                'email': email,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
