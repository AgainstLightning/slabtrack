import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://in-trout-49.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "qb9d5XFFXTpJb36Zk0EDoiRHHbWMqgL9sUVZ6CN0jTYtqeVvJwToSIa1wMkik0fo",
      }
    }),
  });
});
