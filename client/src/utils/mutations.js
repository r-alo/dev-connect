import { gql } from '@apollo/client';

export const LOGIN_FREELANCER = gql`
    mutation loginFreelancer($email: String!, $password: String!) {
        loginFreelancer(email: $email, password: $password) {
            token
            freelancer {
                email
            }
        }
    }
`;

export const ADD_FREELANCER = gql`
    mutation addFreelancer($email: String!, $password: String!) {
        addFreelancer(email: $email, password: $password) {
            token
            freelancer {
                _id
                email
                type
            }
        }
    }
`;