import './Cart.css'

export default function Cart({ id, img_url, name, price, addToCart }) {
  return (
    <div className="Cart" key={id}>
      <h3>{name} </h3>
      <h3>{price}$ </h3>
      <img className="CartImg" src={img_url} alt="shop img" />

      <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}
