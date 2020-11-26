import { fetchPageActionTypes } from "./action";

import { fetchPageStart, fetchPageSuccess, fetchPageFailure } from "./action";
import fetch from "isomorphic-unfetch";

const LOCALE = "fr";
const SPACE = "86i03dw6wwwc";
const ENV = "master";
const TOKEN = "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0";
const URL = `https://cdn.contentful.com/spaces/${SPACE}/environments/${ENV}/entries/?access_token=${TOKEN}&locale=${LOCALE}&include=1&content_type=homepage`;

export function fetchFinalizedPages() {
  return dispatch => {
    dispatch(fetchPageStart());
    return fetch(URL)
      .then(data => data.json())
      .then(data => dispatch(fetchPageSuccess(data)));
  };
}
