/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerCreate } from '../models/AnswerCreate';
import type { AnswerShow } from '../models/AnswerShow';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnswerService {
	/**
	 * Get By Question
	 * @param questionId
	 * @returns AnswerShow Successful Response
	 * @throws ApiError
	 */
	public static getByQuestionApiV1AnswerGet(
		questionId: string
	): CancelablePromise<Array<AnswerShow>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/answer/',
			query: {
				question_id: questionId
			},
			errors: {
				422: `Validation Error`
			}
		});
	}

	/**
	 * Create Answer
	 * @param requestBody
	 * @returns AnswerShow Successful Response
	 * @throws ApiError
	 */
	public static createAnswerApiV1AnswerPost(
		requestBody: AnswerCreate
	): CancelablePromise<AnswerShow> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/answer/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`
			}
		});
	}
}
