
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.json",
  documents: "./app/api/serverless-demo/route.ts",  // Specify the location of your GraphQL operations
  generates: {
    "./lib/gql/types.ts": {
      plugins: ["typescript", "typescript-operations"]
    }
  }
};

export default config;
