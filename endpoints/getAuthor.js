import { client } from "./call";
export default async (args) => {
  const { page, locale, c_type_id, currentAuthor } = args;
  const data = await client.getEntry(c_type_id, { locale });
  const articles = await client.getEntry("6Y1xDPclXIJWOLHsDZEQXS", { locale });
  return {
    data: {
      bio: data.fields.members.filter(
        (member) => member.fields.slug === currentAuthor
      )[0].fields,
      // articles: articles.fields.articles.filter(article === article),
    },
  };
};
