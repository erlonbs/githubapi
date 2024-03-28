
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Before from "./pages/Before";
import After from "./pages/After";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/before">
                <Before/>
            </Route>
            <Route path="/after/:username"exact>
                <After/>
            </Route>
           
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
