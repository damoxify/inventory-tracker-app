import { Route, Switch } from "react-router";
import Home from './components/Home';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route>
      <Home exact path="/"/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </Route>
    </Switch>
    
    </>
  );
}

export default App;
