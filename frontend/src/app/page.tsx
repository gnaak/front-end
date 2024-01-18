import Link from "next/link";

export default function Home(){
  let name = 'park';
  let age = 20;
  return (
    <div>
      <h1 className='title' style={{color: 'red', fontSize :'20px' }}>애플 후레시</h1>
      <p className="title-sub"> by {name} {age}</p>
      <Link href='/list'>asd</Link>
    </div>
  )
}

