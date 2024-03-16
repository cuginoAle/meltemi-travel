import { GraphQLClient, gql } from 'graphql-request';

const apiUrl = process.env.CAISY_GQL_ENDPOINT as string;
const apiKey = process.env.CAISY_API_KEY as string;

const graphQLClient = new GraphQLClient(apiUrl, {
  headers: {
    'x-caisy-apikey': apiKey,
  },
});

export { graphQLClient, gql };
