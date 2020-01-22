import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../config/theme/globalStyles";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";

import { MockProvider } from "../context";
import { theme } from "../config/";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <MockProvider>
            <GlobalStyles />
            <NextSeo
              openGraph={{
                type: "website",
                url: "https://www.societer.co",
                title: "Open Graph Title",
                description: "Open Graph Description",
                images: [
                  {
                    url: "og-image-01.jpg",
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt"
                  },
                  {
                    url: "og-image-02.jpg",
                    width: 900,
                    height: 800,
                    alt: "Og Image Alt Second"
                  }
                ],
                site_name: "Societer"
              }}
              twitter={{
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image"
              }}
            />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MockProvider>
        </ThemeProvider>
      </>
    );
  }
}
