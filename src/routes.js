import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";
import Pokemons from "./pages/pokemons";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:pokemonName" exact component={Pokemons} />

        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
