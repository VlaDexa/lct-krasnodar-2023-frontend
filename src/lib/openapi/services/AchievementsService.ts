/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AchievementShow } from '../models/AchievementShow';
import type { Body_create_achievements_api_v1_achievements__post } from '../models/Body_create_achievements_api_v1_achievements__post';
import type { UserShow } from '../models/UserShow';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AchievementsService {

    /**
     * Get Achievement
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAchievementApiV1AchievementsGet(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/achievements/',
            query: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Achievements
     * @param formData
     * @returns AchievementShow Successful Response
     * @throws ApiError
     */
    public static createAchievementsApiV1AchievementsPost(
        formData: Body_create_achievements_api_v1_achievements__post,
    ): CancelablePromise<AchievementShow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/achievements/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                409: `Achievements already exists error`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Achievement
     * @param id
     * @returns AchievementShow Successful Response
     * @throws ApiError
     */
    public static deleteAchievementApiV1AchievementsDelete(
        id: string,
    ): CancelablePromise<AchievementShow> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/achievements/',
            query: {
                'id': id,
            },
            errors: {
                403: `User is not superadmin or admin`,
                404: `Achievement doesn't exist`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Give Achievement To User
     * @param userId
     * @param achievementId
     * @returns UserShow Successful Response
     * @throws ApiError
     */
    public static giveAchievementToUserApiV1AchievementsGiveAchievementPost(
        userId: string,
        achievementId: string,
    ): CancelablePromise<UserShow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/achievements/give_achievement',
            query: {
                'user_id': userId,
                'achievement_id': achievementId,
            },
            errors: {
                404: `Achievement doesn't exist/ User doesn't exist`,
                409: `Achievements already exists error`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get File
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getFileApiV1AchievementsGetFileGet(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/achievements/get_file',
            query: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
