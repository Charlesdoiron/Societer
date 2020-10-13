import gql from "graphql-tag";
export const GET_ARTICLES_BY_AUTHOR = gql`
  query Articles($id: String!) {
    articleCollection(where: { authors_contains: $id }) {
      items {
        title
        slug
        categoriesCollection {
          items {
            label
            slug
          }
        }
      }
    }

    memberCollection(where: { name_contains: $id }) {
      items {
        name
        metatitle
        metadescription
        canonical
        slug
        img {
          url
        }
        subtitle
        engagements
        description
        twitter
        linkedin
      }
    }
  }
`;
