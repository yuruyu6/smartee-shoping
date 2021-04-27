import SideMenu from './SideMenu';
import Content from './Content/Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProductGroup from '../../pages/forms/AddProductGroup';
import AddProduct from '../../pages/forms/AddProduct';
import ButtonBlock from './ButtonBlock';
import ProductGroupInfo from '../../pages/ProductGroupInfo';

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
          <div>
            <ButtonBlock />
            <div className="px-8 py-6 bg-white rounded-md shadow">
              <Switch>
                <Route
                  path="/addProductGroup"
                  children={<AddProductGroup />}
                ></Route>
                <Route
                  path="/addProduct"
                  children={<AddProduct />}
                ></Route>
                <Route path="/product/:params" children={<ProductGroupInfo />}></Route>
                <Route path="/:params" children={<Content />}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
