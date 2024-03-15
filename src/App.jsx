
import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const handleCart = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    if(!isExist){
      setCart([...cart,p])
    }
    else{
      alert("already in cart");
    }
  }
  console.log(cart);
  
  return (
    <>
      <div className='main-container'>
        {/* card container */}
        <div className='card-container'>
            {
              products.map(pd => <SingleProduct key={products.id} product={pd} handleCart={handleCart}></SingleProduct>)
            }
        </div>
        {/* cart container */}
        <div className='cart-container'>
           <h1>this is cart</h1>
           <div className='cart-title'>
             <h5>name</h5>
             <h5>price</h5>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
