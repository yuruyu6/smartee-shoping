import SideMenu from './SideMenu';
import Content from './Content/Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './Forms/AddProduct';

export default function MainSection() {
  return (
    <Router>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-layout gap-4">
          <div>
            <div className="py-6 bg-white rounded-md shadow">
              <SideMenu />
            </div>
          </div>
          <div className="">
            <div className="px-8 py-6 bg-white rounded-md shadow">
              <Switch>
                <Route
                  path="/addProduct"
                  children={<AddProduct />}
                ></Route>
                <Route path="/:params" children={<Content />}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
