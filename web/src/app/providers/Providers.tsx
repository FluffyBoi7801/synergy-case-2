import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
