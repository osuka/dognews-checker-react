/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @result any
     * @throws ApiError
     */
    public static async usersList(
        limit?: number,
        offset?: number,
    ): Promise<{
        count: number,
        next?: string,
        previous?: string,
        results: Array<User>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/users`,
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
        return result.body;
    }

    /**
     * @param data
     * @result User
     * @throws ApiError
     */
    public static async usersCreate(
        data: User,
    ): Promise<User> {
        const result = await __request({
            method: 'POST',
            path: `/users`,
            body: data,
        });
        return result.body;
    }

    /**
     * @param id A unique integer value identifying this user.
     * @result User
     * @throws ApiError
     */
    public static async usersRead(
        id: number,
    ): Promise<User> {
        const result = await __request({
            method: 'GET',
            path: `/users/${id}`,
        });
        return result.body;
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data
     * @result User
     * @throws ApiError
     */
    public static async usersUpdate(
        id: number,
        data: User,
    ): Promise<User> {
        const result = await __request({
            method: 'PUT',
            path: `/users/${id}`,
            body: data,
        });
        return result.body;
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data
     * @result User
     * @throws ApiError
     */
    public static async usersPartialUpdate(
        id: number,
        data: User,
    ): Promise<User> {
        const result = await __request({
            method: 'PATCH',
            path: `/users/${id}`,
            body: data,
        });
        return result.body;
    }

    /**
     * @param id A unique integer value identifying this user.
     * @result any
     * @throws ApiError
     */
    public static async usersDelete(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/users/${id}`,
        });
        return result.body;
    }

}