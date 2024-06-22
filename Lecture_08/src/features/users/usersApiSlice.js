import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 5, // Caching in RTK query => 5 means 5seconds
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice   

