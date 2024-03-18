import { GraphQLClient, gql } from 'graphql-request';

const apiUrl = process.env.HYGRAPH_GQL_ENDPOINT as string;

const graphQLClient = new GraphQLClient(apiUrl);

export { graphQLClient, gql };
