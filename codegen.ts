import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cltva2fx901it07w80oxdno3v/master',
  // documents: 'src/app/gql/queries',
  generates: {
    'src/app/gql/generated/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
