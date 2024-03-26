import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cltva2fx901it07w80oxdno3v/master',
  ignoreNoDocuments: true,
  generates: {
    'src/app/gql/generated/': {
      documents: 'src/gql',
      preset: 'client',
    },
    // 'src/app/gql/generated/graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
  },
};

export default config;
