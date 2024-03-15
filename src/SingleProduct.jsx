const singleProduct = ({product, handleCart}) => {
    // console.log(handleCart);

    return (
        <div>
            <div className='card'>
              <div className='card-img'>
              <img src={product.image} alt="" />
              </div>
              <h2>{product.title.slice(0,10)}</h2>
              <p>{product.description.slice(0,100)}</p>
              <div className='card-footer'>
                <h3>{product.price} $</h3>
                <button onClick={(e) => handleCart(product)} className='add-btn'>Add To Cart</button>
              </div>
            </div>
        </div>
    );
};

export default singleProduct;