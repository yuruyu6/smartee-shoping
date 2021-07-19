import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTER_KEY } from '../../utils/routerKeys';
import Loader from '../UI/Loader';
import ButtonBlock from './ButtonsBlock';
import MenuList from './MenuList';

const AddProduct = lazy(() => import('../../pages/forms/AddProduct'));
const AddProductGroup = lazy(() => import('../../pages/forms/AddProductGroup'));
const ProductGroupInfo = lazy(() => import('../../pages/ProductGroupInfo'));
const CategoryInfo = lazy(() => import('../../pages/CategoryInfo'));
const Main = lazy(() => import('../../pages/Main'));

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
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route
                  path={[
                    ROUTER_KEY.ADD_PRODUCT_GROUP_EDIT,
                    ROUTER_KEY.ADD_PRODUCT_GROUP,
                  ]}
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
                  children={<CategoryInfo />}
                ></Route>
                <Route path={ROUTER_KEY.MAIN_PAGE} children={<Main />}></Route>
              </Switch>
            </Suspense>
          </section>
        </div>
      </div>
    </div>
  );
}
