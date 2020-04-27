import { client } from "./endpoints/call";
const ContentfulSitemap = require("contentful-sitemap");
const sitemap = new ContentfulSitemap([], client, { options });

app.get("/sitemap.xml", (req, res) => {
  sitemap.toXML((xml, err) => {
    if (err) {
      return res.status(500).end();
    }

    res.header("Content-Type", "application/xml");
    res.send(xml);
  });
});
