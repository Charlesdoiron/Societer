// pages/sitemap.xml.js

import React from "react";
import getPage from "../endpoints/getPage";

const URL = "https://www.societer.co";

const createSitemap = (pages, posts) => {
  const articles = posts.data.articles;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml">
        
          ${pages
            .map(({ slug }) => {
              return `
              <url>
              <loc>${`${URL}/fr/${slug}`}</loc>
                <xhtml:link 
               rel="alternate"
               hreflang="en-us"
               href="${`${URL}/en/${slug}`}"/>
              </url>
                `;
            })
            .join("")}
            
            ${articles
              .map((article) => {
                return `
                    <url>
                        <loc>${`${URL}/fr/article/${article.fields.slug}`}
                           <xhtml:link 
                           rel="alternate"
                           hreflang="en-us"
                            href="${`${URL}/en/article/${article.fields.slug}`}"/>
                        </loc>
                     
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
