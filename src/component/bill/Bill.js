import { BillContext } from '../../Helper/Context'
import { useState, useEffect, useContext } from 'react'
import './Bill.css'

function Bill() {
  const { cart, setCart } = useContext(BillContext)

  const onRemove = (item) => {
    const exist = cart.find((x) => x.id === item.id)
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id))
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x,
        ),
      )
    }
  }

  const addtoCart = (item) => {
    const exist = cart.find((x) => x.id === item.id)
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x,
        ),
      )
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  const result = cart.reduce(
    (total, currentValue) =>
      (total = total + currentValue.price * currentValue.qty),
    0,
  )

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        {cart.map((item) => {
          return (
            <tbody className="Bill_Container" key={item.id}>
              <tr className="Bill_Items">
                <td>
                  <img
                    className="BilItemImg"
                    src={item.imgUrl}
                    alt="shop img"
                  />
                </td>
                <td> {item.name} </td>
                <td> quantity: {item.qty} </td>
                <td> price: {item.price * item.qty}$ </td>

                <td>
                  <button onClick={() => onRemove(item)}>-</button>
                  <button onClick={() => addtoCart(item)}>+</button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>

      <div>
        <h1>Total : {result}$</h1>
      </div>
    </>
  )
}
export default Bill
