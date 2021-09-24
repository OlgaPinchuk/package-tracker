// NPM Packages
import { Route, Switch } from "react-router-dom";

// Project files
import Home from "../pages/Home";
import PackageDetails from "../pages/PackageDetails";

export default function LoadedLayout({ data }) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home data={data} />
      </Route>
      <Route path="/packages/:id">
        <PackageDetails data={data} />
      </Route>
    </Switch>
  );
}
