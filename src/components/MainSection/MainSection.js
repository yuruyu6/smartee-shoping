import { Route, Switch } from 'react-router-dom';
import MenuList from './MenuList';
import AddProductGroup from '../../pages/forms/AddProductGroup';
import AddProduct from '../../pages/forms/AddProduct';
import ButtonBlock from './ButtonBlock';
import Content from './Content/Content';
import ProductGroupInfo from '../../pages/ProductGroupInfo';

export default function MainSection() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-layout gap-0 sm:gap-4">
        <div>
          <div className="py-6 bg-white rounded-md shadow hidden sm:block">
            <MenuList />
          </div>
        </div>
        <div>
          <ButtonBlock />
          <section className="px-3 md:px-8 py-6 bg-white rounded-md shadow">
            <Switch>
              <Route
                path="/addProductGroup/:params"
                children={<AddProductGroup />}
              ></Route>
              <Route
                path="/addProductGroup"
                children={<AddProductGroup />}
              ></Route>
              <Route path="/addProduct" children={<AddProduct />}></Route>
              <Route
                path="/product/:params"
                children={<ProductGroupInfo />}
              ></Route>
              <Route path="/:params" children={<Content />}></Route>
            </Switch>
          </section>
        </div>
      </div>
    </div>
  );
}
