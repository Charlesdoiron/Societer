import App from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../config/theme/globalStyles";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { MockProvider } from "../context";
import { theme } from "../config";
import { withRouter } from "next/router";
import { PageTransition } from "next-page-transitions";
import withApolloClient from "../apollo/client";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn:
    "https://da21e4349dfb4693b89f198f104eed6f@o389725.ingest.sentry.io/5228444",
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <MockProvider>
            <NextSeo
              openGraph={{
                type: "website",
                url: "https://www.societer.co",
                title: "Societer",
                description: "Maison de conseil en sustainable leadership",
                images: [
                  {
                    url: "https://www.societer.co/og-image-02.jpg",
                    width: 800,
                    height: 600,
                    alt:
                      "Societer | Maison de conseil en sustainable leadership",
                  },
                  {
                    url: "https://www.societer.co/og-image-02.jpg",
                    width: 900,
                    height: 800,
                    alt:
                      "Societer | Maison de conseil en sustainable leadership",
                  },
                ],
                site_name:
                  "Societer | Maison de conseil en sustainable leadership",
              }}
              twitter={{
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
              }}
            />
            {/* <PageTransition timeout={200} classNames="page-transition"> */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* </PageTransition> */}
            <style jsx global>{`
              .page-transition-enter {
                opacity: 0;
                transition: opacity 1000ms;
              }
              .page-transition-enter-active {
                opacity: 1;
                transition: opacity 1000ms;
              }
              .page-transition-exit {
                opacity: 1;
                transition: opacity 1000ms;
              }
              .page-transition-exit-active {
                opacity: 0;
                transition: opacity 1000ms;
              }
            `}</style>
          </MockProvider>
        </ThemeProvider>
        <GlobalStyles />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(withRouter(MyApp));
