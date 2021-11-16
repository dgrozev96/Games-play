import CreateGame from "./components/CreateGame";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog";

function App() {

  const routes = {
    '/home': WelcomeWorld,
    '/games': GameCatalog,
    '/create-game': CreateGame,
  }
  return (
    <div id="box">
      <Header />


      <main id="main-content">
        <WelcomeWorld />
      </main>

    </div>
  );
}

export default App;
