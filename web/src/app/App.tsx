import { FC } from "react";
import { Providers } from "./providers";
import { AppRouter } from "./routers";

const App: FC = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
