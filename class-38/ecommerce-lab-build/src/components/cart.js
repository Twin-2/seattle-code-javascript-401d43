import { connect } from 'react-redux';
import { When } from 'react-if';

const Cart = props => {
  return (
    <When condition={props.cart.length >= 1}>
      <ul>
        {props.cart.map(product => {
          return <li key={product.name}>{product.name}</li>
        })}
      </ul>
    </When>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Cart);