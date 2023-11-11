/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionBase } from '../models/QuestionBase';
import type { QuestionCreate } from '../models/QuestionCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionsService {

    /**
     * Create Question
     * @param requestBody
     * @returns QuestionBase Successful Response
     * @throws ApiError
     */
    public static createQuestionApiV1QuestionsPost(
        requestBody: QuestionCreate,
    ): CancelablePromise<QuestionBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/questions/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
