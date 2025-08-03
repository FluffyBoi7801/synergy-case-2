import { FC } from "react";
import { Providers } from "./providers";
import AppRouter from "./routers/AppRouter";

const App: FC = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
