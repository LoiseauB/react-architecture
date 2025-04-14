import { AppWrapper } from "./modules/app/components/AppWrapper";
import { Layout } from "./modules/app/components/Layout";
import { GamePage } from "./modules/create-game/components/pages/GamePage";

function App() {
  return (
    <AppWrapper>
      <Layout>
        <GamePage />
      </Layout>
    </AppWrapper>
  );
}

export default App;
