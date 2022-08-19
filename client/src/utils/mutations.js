import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
            email
            }
        }
    }
`;