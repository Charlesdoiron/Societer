import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import NextSeo from "next-seo";
import GlobalStyles from "../config/theme/globalStyles";

import Layout from "../components/layout";

import SEO from "../next-seo.config";
import { MockProvider } from "../context";
import { theme } from "../config/";

export default class MyApp extends App {
  constructor() {
    super();
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <MockProvider>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MockProvider>
        </ThemeProvider>
      </>
    );
  }
}
