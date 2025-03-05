import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      // let totalAmount = 0
      const totalAmount = cartList.reduce(
        (accumulator, eachItem) =>
          accumulator + eachItem.quantity * eachItem.price,
        0,
      )

      const totalItems = cartList.length
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-all-section">
                  <button className="remove-all-btn" onClick={onClickRemoveAll}>
                    Remove All
                  </button>
                </div>
                <CartListView />
                <div className="order-total">
                  <h1 className="total-amount-in-cart">
                    Order Total:
                    <span className="total-amount-number">{` Rs ${totalAmount}/-`}</span>
                  </h1>
                  <p className="items-in-cart">{totalItems} items in cart</p>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
