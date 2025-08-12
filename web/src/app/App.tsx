import { FC } from "react";
import { Providers } from "./providers";
import { AppRouter } from "./routers";
import { Toaster } from "@/shared/ui";

const App: FC = () => {
  return (
    <Providers>
      <AppRouter />
      <Toaster />
    </Providers>
  );
};

export default App;
