import { gql } from '@apollo/client';

export const ME = gql`
    query me {
        me {
            firstName
            lastName
            email
            phone
            github
            languages {
                language
            }
            frameworks {
                framework
            }
            platforms {
                platform
            }
            knowledge {
                knowledge
            }
        }
    }
`;

export const LANGUAGE = gql`
    query language {
        language {
            language
        }
    }
`;