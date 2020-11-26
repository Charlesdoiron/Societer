export const removeQuery = url => {
  return url
    .replace("fr", "")
    .replace("en", "")
    .replace("fr/", "")
    .replace("en/", "")
    .replace("[lang]", "")
    .replace("[lang]/", "");
};
