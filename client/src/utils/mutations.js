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
    mutation addFreelancer($firstName: String!, $lastName: String!, $phone: String!, $github: String!, $company: String!, $email: String!, $password: String!, $languages: [LanguageInput], $frameworks: [FrameworkInput], $platforms: [PlatformInput], $knowledge: [KnowledgeInput]) {
        addFreelancer(firstName: $firstName, lastName: $lastName, phone: $phone, github: $github, company: $company, email: $email, password: $password, languages: $languages, frameworks: $frameworks, platforms: $platforms, knowledge: $knowledge) {
            token
            freelancer {
                _id
                email
                type
            }
        }
    }
`;

export const LOGIN_RECRUITER = gql`
    mutation loginRecruiter($email: String!, $password: String!) {
        loginRecruiter(email: $email, password: $password) {
            token
            recruiter {
                email
            }
        }
    }
`;

export const ADD_RECRUITER = gql`
    mutation addRecruiter($firstName: String!, $lastName: String!, $phone: String!, $company: String!, $email: String!, $password: String!) {
        addRecruiter(firstName: $firstName, lastName: $lastName, phone: $phone, company: $company, email: $email, password: $password) {
            token
            freelancer {
                _id
                email
                type
            }
        }
    }
`;