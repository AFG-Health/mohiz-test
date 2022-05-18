import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createApi,
  fetchBaseQuery,
  ApiProvider,
} from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://one-check-cache-prod.herokuapp.com/search/testingcenters' }),
  endpoints: (builder) => ({
    getLocationByName: builder.query({
      query: (task) => ({
        url: "/",
        method: "POST",
        body: task
      })
    }),
  }),
})

function Testingcenters() {
  const { data, refetch, isFetching } = api.useGetLocationByNameQuery(
    {
      "testType":"PCR",
      "searchDate":"2022-05-19",
      "geoPoint": [45.497, 9.195]
    }
  )

  return (
    <div>
      <button onClick={refetch}>Refetch</button>
      <div>
        <b>isFetching?</b>: {(isFetching)}
      </div>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={api}>
      <Testingcenters />
    </ApiProvider>
);

