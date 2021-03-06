/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Submission } from '../models/Submission';
import { request as __request } from '../core/request';

export class SubmissionsService {

    /**
     * Submitted articles for review
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @result any
     * @throws ApiError
     */
    public static async submissionsList(
        limit?: number,
        offset?: number,
    ): Promise<{
        count: number,
        next?: string,
        previous?: string,
        results: Array<Submission>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/submissions`,
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * Submitted articles for review
     * @param data
     * @result Submission
     * @throws ApiError
     */
    public static async submissionsCreate(
        data: Submission,
    ): Promise<Submission> {
        const result = await __request({
            method: 'POST',
            path: `/submissions`,
            body: data,
        });
        return result.body;
    }

    /**
     * Submitted articles for review
     * @param id A unique integer value identifying this submission.
     * @result Submission
     * @throws ApiError
     */
    public static async submissionsRead(
        id: number,
    ): Promise<Submission> {
        const result = await __request({
            method: 'GET',
            path: `/submissions/${id}`,
        });
        return result.body;
    }

    /**
     * Submitted articles for review
     * @param id A unique integer value identifying this submission.
     * @param data
     * @result Submission
     * @throws ApiError
     */
    public static async submissionsUpdate(
        id: number,
        data: Submission,
    ): Promise<Submission> {
        const result = await __request({
            method: 'PUT',
            path: `/submissions/${id}`,
            body: data,
        });
        return result.body;
    }

    /**
     * Submitted articles for review
     * @param id A unique integer value identifying this submission.
     * @param data
     * @result Submission
     * @throws ApiError
     */
    public static async submissionsPartialUpdate(
        id: number,
        data: Submission,
    ): Promise<Submission> {
        const result = await __request({
            method: 'PATCH',
            path: `/submissions/${id}`,
            body: data,
        });
        return result.body;
    }

    /**
     * Submitted articles for review
     * @param id A unique integer value identifying this submission.
     * @result any
     * @throws ApiError
     */
    public static async submissionsDelete(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/submissions/${id}`,
        });
        return result.body;
    }

}