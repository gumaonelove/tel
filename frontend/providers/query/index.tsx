import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

interface Props {
  dehydratedState: any;
  children: any;
}

const QueryProvider: React.FC<Props> = ({ children, dehydratedState }) => {
  const queryClientRef = React.useRef<QueryClient | undefined>(undefined);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, refetchOnMount: false },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default QueryProvider;
