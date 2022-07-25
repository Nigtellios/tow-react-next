import { gql } from '@apollo/client';

const headerQuery = gql`
  query Header {
    header {
      data {
        id
        attributes {
          logotype {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          navigation {
            navigation_items {
              name
              url
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default headerQuery;
