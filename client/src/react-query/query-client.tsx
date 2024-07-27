import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from "@tanstack/react-query";

export const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // staleTime: 600000, // 10분
      // gcTime: 900000, // 15분
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      alert(`error ${error}`);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      return <div>Mutation error: {error.message}</div>;
    },
  }),
};

export const queryClient = new QueryClient(queryClientOptions);
