/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleCreate } from '../models/ArticleCreate';
import type { ArticleShow } from '../models/ArticleShow';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SurveyService {

    /**
     * Get Questions
     * @param id
     * @returns ArticleShow Successful Response
     * @throws ApiError
     */
    public static getQuestionsApiV1SurveyGet(
        id: string,
    ): CancelablePromise<ArticleShow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/survey/',
            query: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Article
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createArticleApiV1SurveyPost(
        requestBody: ArticleCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/survey/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
