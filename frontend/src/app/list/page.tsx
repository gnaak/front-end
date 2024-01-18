import Image from "next/image"
import logo from "/public/images/logo.png"
export default function List() {
  let 상품:string[]  = ['tomatoes','potato','coconut']
  let 가격:number[] = [20, 40, 50]
  상품.map(()=> {
    
  })
  return (
    <div>
      <h2 className="title">Products</h2>
        {
          상품.map((a, i)=> {
            return(
              <div className="food" key={i}>
                <Image src={logo} alt="Logo" />
                <h4>{a} ${가격[i]}</h4>
              </div>
            )
          })
        }
    </div>
  )
} 
