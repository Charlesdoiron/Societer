import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../config/theme/globalStyles";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { MockProvider } from "../context";
import { theme } from "../config/";
import { withRouter } from "next/router";

class MyApp extends App {
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

            <Layout>
              <Component {...pageProps} />
              <GlobalStyles />
            </Layout>
          </MockProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default withRouter(MyApp);
