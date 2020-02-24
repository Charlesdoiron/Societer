const SPACE_ID = process.env.SPACE_ID;
const CONTENTFUL_TOKEN = process.env.CONTENTFUL_TOKEN;
const CONTENTFUL_ENV = process.env.CONTENTFUL_ENV;

export const fetchPage = async args => {
  const { page } = args;
  const { locale } = args;
  console.log("fetching");
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${CONTENTFUL_ENV}/entries/?access_token=${CONTENTFUL_TOKEN}&locale=${locale}&include=2&content_type=${page}`
  );
  const cmsData = await response.json();
  return {
    fields: {
      subtitle: cmsData.items.map(f => f.fields.subtitle),
      tagline: cmsData.items.map(f => f.fields.tagline),
      backgroundImage: cmsData.includes.Asset.map(f => f.fields.file.url)
    }
  };
};
