import "../styles/productlist.css"
import Product from "./Product"

function PL(){
    return(

        <>
        
        <h1 className="contact-title">PRODUCT LIST</h1>
        <div className="product-list">

         <Product  productImg="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"productTitle="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" productPrice="$109.95"/>

         <Product  productImg="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" productTitle= "DANVOUY Womens T Shirt Casual Cotton Short"productPrice="$12.99"/>

         <Product  productImg="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"productTitle="Mens Cotton Jacket"productPrice="$55.99"/>

         <Product  productImg="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"productTitle="Mens Casual Slim Fit"productPrice="$15.99"/>

         <Product  productImg="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"productTitle="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"productPrice="$695"/>

         <Product  productImg="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"productTitle="Solid Gold Petite Micropave "productPrice="$168"/>

         <Product  productImg="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"productTitle="White Gold Plated Princess"productPrice="168"/>

         <Product  productImg="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"productTitle="Pierced Owl Rose Gold Plated Stainless Steel Double"productPrice= "$10.99"/>

         <Product  productImg="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"productTitle="WD 2TB Elements Portable External Hard Drive - USB 3.0 "productPrice="$64"/>

         <Product  productImg="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"productTitle="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"productPrice="$109"/>
        

        


        </div>
        
        
        </>
    )
}

export default PL