import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../config/theme/globalStyles";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { StateProvider } from "../context/state";
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
    const initialState = {
      locale: "",
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case "setLocale":
          return {
            ...state,
            locale: action.locale,
          };

        default:
          return state;
      }
    };

    return (
      <>
        <StateProvider initialState={initialState} reducer={reducer}>
          <ThemeProvider theme={theme}>
            <MockProvider>
              <GlobalStyles />
              <NextSeo
                openGraph={{
                  type: "website",
                  url: "https://www.societer.co",
                  title: "Societer",
                  description: "Maison de conseil en sustainable leadership",
                  images: [
                    {
                      url: "og-image-01.jpg",
                      width: 800,
                      height: 600,
                      alt:
                        "Societer | Maison de conseil en sustainable leadership",
                    },
                    {
                      url: "og-image-02.jpg",
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
              </Layout>
            </MockProvider>
          </ThemeProvider>
        </StateProvider>
      </>
    );
  }
}

export default withRouter(MyApp);
