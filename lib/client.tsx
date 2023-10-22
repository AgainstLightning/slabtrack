import { HttpLink, split } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  ApolloNextAppProvider
} from "@apollo/experimental-nextjs-app-support/ssr";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT_URL,
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET_KEY as string,
  }
});

const wsLink = new GraphQLWsLink(createClient({
  url: process.env.NEXT_PUBLIC_HASURA_WS_ENDPOINT_URL as string,
  lazy: true,
  connectionParams: {
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET_KEY as string,
    },
  },
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const makeClient = () => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: splitLink
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
