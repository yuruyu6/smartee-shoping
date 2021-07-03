import { Route, Switch } from 'react-router-dom';
import MenuList from './MenuList';
import AddProductGroup from '../../pages/forms/AddProductGroup';
import AddProduct from '../../pages/forms/AddProduct';
import ButtonBlock from './ButtonsBlock';
import Content from './ContentBlock';
import ProductGroupInfo from '../../pages/ProductGroupInfo';
import MainContentBlock from './MainContentBlock';
import { ROUTER_KEY } from '../../utils/routerKeys';

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
                path={ROUTER_KEY.ADD_PRODUCT_GROUP_EDIT}
                children={<AddProductGroup />}
              ></Route>
              <Route
                path={ROUTER_KEY.ADD_PRODUCT_GROUP}
                children={<AddProductGroup />}
              ></Route>
              <Route
                path={ROUTER_KEY.ADD_PRODUCT}
                children={<AddProduct />}
              ></Route>
              <Route
                path={ROUTER_KEY.PRODUCT_GROUP_INFO}
                children={<ProductGroupInfo />}
              ></Route>
              <Route
                path={ROUTER_KEY.PRODUCT_GROUPS_BY_CATEGORY}
                children={<Content />}
              ></Route>
              <Route
                path={ROUTER_KEY.MAIN_PAGE}
                children={<MainContentBlock />}
              ></Route>
            </Switch>
          </section>
        </div>
      </div>
    </div>
  );
}
