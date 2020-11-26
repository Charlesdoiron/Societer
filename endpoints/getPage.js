import { client } from "./call";
export default async (args) => {
  const { page, locale, c_type_id } = args;
  const data = await client.getEntry(c_type_id, { locale });
  return {
    data: data.fields,
  };
};
