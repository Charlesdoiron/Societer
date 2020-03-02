import { client } from "./call";
export default async args => {
  const { page, locale, c_type_id, slug } = args;
  const data = await client.getEntries({
    query: slug
  });
  return {
    data: data.items[0].fields
  };
};
