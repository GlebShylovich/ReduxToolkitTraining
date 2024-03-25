import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' //OBYAZATELNO ETOT PUT'
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getPost: builder.query({
            query: () => ({
                url: '/posts',
                method: 'GET',
            })
        })
    })
})
export const {useGetPostQuery} = postApi
