import { gql } from '@apollo/client';

export const GET_FREELANCERS = gql`
    query freelancer {
        freelancer {
            firstName
            lastName
            email
            phone
            github
            languages {
                language
            }
        }
    }
`;