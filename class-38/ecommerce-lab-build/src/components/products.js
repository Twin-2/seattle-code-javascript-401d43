import { connect } from 'react-redux';
import { When } from 'react-if';
import { add } from '../store/cart.js';

const Products = props => {
  return (
    <>
      {props.products.map(product => {
        return <When condition={product.category === props.activeCategory}>
          <section>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={() => props.add(product)}>Add to Cart</button>
          </section>
        </When>
      })}
    </>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  activeCategory: state.categories.activeCategory
})

const mapDispatchToProps = { add };

export default connect(mapStateToProps, mapDispatchToProps)(Products);