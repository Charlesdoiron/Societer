// pages/sitemap.xml.js

import React from "react";
import getPage from "../endpoints/getPage";
const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";
const URL = "https://societer.co";

const createSitemap = (pages, posts) => {
  const articles = posts.data.articles;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        
          ${pages
            .map(({ slug }) => {
              return `
                    <url>
                        <loc>${`${URL}/fr/${slug}`}</loc>
                    </url>
                     <url>
                        <loc>${`${URL}/en/${slug}`}</loc>
                    </url>
                `;
            })
            .join("")}
            ${articles
              .map((article) => {
                return `
                    <url>
                        <loc>${`${URL}/fr/article/${article.fields.slug}`}</loc>
                    </url>
                    <url>
                        <loc>${`${URL}/en/article/${article.fields.slug}`}</loc>
                    </url>

                `;
              })
              .join("")}
               
         
    </urlset>
    `;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const pages = [
      { slug: "mission" },
      { slug: "community" },
      { slug: "contact" },
      { slug: "legals" },
      { slug: "public-debat" },
      { slug: "vision" },
    ];
    const posts = await getPage({
      c_type_id: "6Y1xDPclXIJWOLHsDZEQXS",
      locale: "fr",
    });

    res.setHeader("Content-Type", "application/xml");
    res.write(createSitemap(pages, posts));

    res.end();
  }
}

export default Sitemap;
