import { client } from "./call";

export default async (args) => {
  const { currentAuthor, locale } = args;
  const data = await client.getEntries({
    query: currentAuthor,
    include: 10,
    locale,
  });

  return {
    data: data.items[0].fields,
  };
};
