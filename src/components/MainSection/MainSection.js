import SideMenu from "./SideMenu";
import Content from "./Content/Content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function MainSecrion() {
  return (
    <Router>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-layout gap-4">
          <div className="py-6 bg-white rounded-md shadow">
            <SideMenu />
          </div>
          <div className="">
            <div className="px-8 py-6 bg-white rounded-md shadow">
              <Switch>
                <Route path="/cpu">
                  <h1>Random text CPU</h1>
                </Route>
                <Route path="/motherboard">
                  <h1>Random text MB</h1>
                </Route>
                <Route path="/ram">
                  <h1>Random text RAM</h1>
                </Route>
                <Route path="/drive">
                  <h1>Random text drives</h1>
                </Route>
                <Route path="/">
                  <Content />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
