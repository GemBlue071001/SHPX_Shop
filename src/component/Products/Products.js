import Cart from './cart/Cart'
import { useState, useEffect, useContext } from 'react'
import { db, storage, fetchImages } from '../../firebas-config'
import { ref, getDownloadURL } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { BillContext } from '../../Helper/Context'
import './Product.css'

export default function Products() {
  // const [cart, setCart] = useState([])

  const { cart, setCart } = useContext(BillContext)

  const [items, setItems] = useState([])

  const itemCollectionRef = collection(db, 'Items')

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemCollectionRef)
      var tmpItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      for (var item of tmpItems) {
        console.log('GET IMAGE FOR ' + item.name)
        var imgUrl = await fetchImages(`Images/${item.imgName}`)
        item.imgUrl = imgUrl
      }

      setItems(tmpItems)
      console.log(tmpItems)
    }
    getItems()
  }, [])

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

  return (
    <div className="Item_Container">
      {items.length > 0 &&
        items.map((item) => {
          return (
            <Cart
              className="Items"
              key={item.id}
              name={item.name}
              price={item.price}
              img_url={item.imgUrl}
              id={item.id}
              addToCart={() => addtoCart(item)}
            />
          )
        })}
    </div>
  )
}
// viet ra 1 hamf
