import Categories from './categories.js';
import CurrentCategory from './current-category.js';
import Products from './products.js';
import Cart from './cart.js';

const StoreFront = props => {
  return (
    <>
      <CurrentCategory />
      <Categories />
      <Products />
      <Cart />
    </>
  )
}

export default StoreFront;