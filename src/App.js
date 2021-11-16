import { useState, createElement } from "react";

import CreateGame from "./components/CreateGame";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog";

function App() {
  const [page, setPage] = useState('/home');
  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
  }

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path)
  }


  return (
    <div id="box">
      <Header
        navigationChangeHandler={navigationChangeHandler}
      />


      <main id="main-content">
        {routes[page] || <h2>No page found</h2>}
      </main>

    </div>
  );
}

export default App;
