const SPACE_ID = process.env.SPACE_ID;
const CONTENTFUL_TOKEN = process.env.CONTENTFUL_TOKEN;
const CONTENTFUL_ENV = process.env.CONTENTFUL_ENV;
import fetch from "isomorphic-unfetch";
export const fetchPage = async args => {
  const { page } = args;
  const { locale } = args;

  const response = await fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${CONTENTFUL_ENV}/entries/?access_token=${CONTENTFUL_TOKEN}&locale=${locale}&content_type=${page}&include=10`
  );
  const data = await response.json();
  switch (page) {
    case "homepage":
      return {
        fields: {
          subtitle: data.items.map(f => f.fields.subtitle),
          tagline: data.items.map(f => f.fields.tagline),
          backgroundImage: data.includes.Asset.map(f => f.fields.file.url)
        }
      };
      break;
    case "vision":
      return {
        fields: {
          secondPartSubtitle: data.items.map(f => f.fields.secondPartSubtitle),
          secondPartArticleTitle: data.items.map(
            f => f.fields.secondPartArticleTitle
          ),
          secondPartLogo: data.includes.Asset.map(f => f.fields.file.url),
          secondPartAuthors: data.items.map(
            f => f.fields.secondPartAuthors.content
          ),
          secondPartPublished: data.items.map(
            f => f.fields.secondPartPublished
          ),
          secondPartChapeau: data.items.map(f => f.fields.secondPartChapeau),
          secondPartArticleContent: [
            {
              content: data.items.map(f => f.fields.secondPartArticleContent1)
            },
            {
              title: data.items.map(f => f.fields.secondPartArticleTitle2)
            },
            {
              content: data.items.map(f => f.fields.secondPartArticleContent2)
            },
            {
              title: data.items.map(f => f.fields.secondPartArticleTitle3)
            },
            {
              content: data.items.map(f => f.fields.secondPartArticleContent3)
            }
          ]
        }
      };

      break;
    case "mission":
      return data.items.map(f => {
        return {
          title: f.fields.title,
          chapeau: f.fields.chapeau,
          firstPartLabor: f.fields.firstPartLabor,
          secondPartFatTitle: f.fields.secondPartFatTitle,
          teamImg: f.fields.title,
          subTitle: f.fields.subTitle,
          subTitleTwo: f.fields.subTitleTwo,
          expertise: [
            {
              title: f.fields.expertiseTitle1,
              slug: f.fields.expertiseSlug1,
              description: f.fields.expertiseDescription1
            },
            {
              title: f.fields.expertiseTitle2,
              slug: f.fields.expertiseSlug2,
              description: f.fields.expertiseDescription2
            },
            {
              title: f.fields.expertiseTitle3,
              slug: f.fields.expertiseSlug3,
              description: f.fields.expertiseDescription3
            },
            {
              title: f.fields.expertiseTitle4,
              slug: f.fields.expertiseSlug4,
              description: f.fields.expertiseDescription4
            },
            {
              title: f.fields.expertiseTitle5,
              slug: f.fields.expertiseSlug5,
              description: f.fields.expertiseDescription5
            },
            {
              title: f.fields.expertiseTitle6,
              slug: f.fields.expertiseSlug6,
              description: f.fields.expertiseDescription6
            },
            {
              title: f.fields.expertiseTitle7,
              slug: f.fields.expertiseSlug7,
              description: f.fields.expertiseDescription7
            },
            {
              title: f.fields.expertiseTitle8,
              slug: f.fields.expertiseSlug8,
              description: f.fields.expertiseDescription8
            }
          ]
        };
      });

      break;
    case "community":
      return {
        data,
        members: data.includes.Entry.map(f => f.fields).map((f, i) => {
          return {
            name: f.name,
            slug: f.slug,
            subtitle: f.subtitle,
            description: f.description,
            engagements: f.engagements,
            twitter: f.twitter,
            linkedin: f.linkedin,
            img: data.includes.Asset[i].fields.file.url
          };
        }),
        strategicComiteeSubtitle: data.items.map(
          f => f.fields.strategicComiteSubtitle
        ),
        strategicComitee: data.items.map(f => f.fields.strategicComitee)
      };
      break;
    case "public-debat":
      return {
        fields: {
          subtitle: data.items.map(f => f.fields.subtitle),
          tagline: data.items.map(f => f.fields.tagline),
          backgroundImage: data.includes.Asset.map(f => f.fields.file.url)
        }
      };
      break;
    case "contact":
      return {
        fields: {
          subtitle: data.items.map(f => f.fields.subtitle),
          tagline: data.items.map(f => f.fields.tagline),
          backgroundImage: data.includes.Asset.map(f => f.fields.file.url)
        }
      };
      break;
  }
};
