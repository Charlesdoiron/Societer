import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";

const SPACE = "86i03dw6wwwc";
const ENVIRONMENT = "master";
const TOKEN = "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0";
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
    "Content-Language": "en-us",
  },
});

export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
        // Rehydrates the cache using the initial data passed from the server:
        .restore(initialState || {}),
    })
);
