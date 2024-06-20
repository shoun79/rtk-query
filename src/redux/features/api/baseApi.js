import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getUsers: builder.query({
            query: () => '/users'
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        setPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        })
    })
})

export const { useGetPostsQuery, useGetUsersQuery, useGetPostByIdQuery, useSetPostMutation } = baseApi;

