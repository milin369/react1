function Product(props) {
console.log (props)

  return (
    <div className="product-item">
      <img src={props.productImg} />
      <p className="product-title"> {props.productTitle}
      </p>
      <p> {props.productPrice} </p>
    </div>
  );
}

export default Product;
