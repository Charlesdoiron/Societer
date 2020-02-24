import fetch from "isomorphic-unfetch";

export const fetchPageActionTypes = {
  FETCH_PAGE: "FETCH_PAGE"
};

const LOCALE = "fr";
const SPACE = "86i03dw6wwwc";
const ENV = "master";
const TOKEN = "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0";
const URL = `https://cdn.contentful.com/spaces/${SPACE}/environments/${ENV}/entries/?access_token=${TOKEN}&locale=${LOCALE}&include=1&content_type=homepage`;

export const fetchPage = () => ({
  type: fetchPageActionTypes.FETCH_PAGE,
  payload: fetch(URL)
});

// export function fetchFinalizedPages() {
//   return dispatch => {
//     dispatch(fetchPageStart());
//     return fetch(URL)
//       .then(data => data.json())
//       .then(data => dispatch(fetchPageSuccess(data)));
//   };
// }
