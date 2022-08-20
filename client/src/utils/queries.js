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

export const FREELANCER = gql`
    query freelancer($id: ID!) {
        freelancer(_id: $id) {
            firstName
            lastName
            email
            phone
            github
        }
    }
`;

export const FREELANCERS = gql`
    query freelancers {
        freelancers {
            _id
            firstName
            lastName
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

