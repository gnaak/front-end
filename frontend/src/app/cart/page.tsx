'use client'

/**
 * 
 * @returns 
 */

export default function Cart() {
  return (
    <div>
      <h4 onClick={()=>{}}className="title">Cart</h4>
      <CartItem/>
      <CartItem/>
      <CartItem/>
    </div>
  )
} 

/**카트 아이템 들어갈거 */
function CartItem(){
  return(
    <div className="cart-item">
    <p>상품명</p>
    <p>$40</p>
    <p>1개</p>
   </div>
  )
}
