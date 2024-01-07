import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
  <div>
    <NavBar />
    <h1>Hello {counter}</h1>
    <button onClick={()=> setCounter((prev) => prev+1)}>+</button>
    <style jsx global>{`
    a{
      color : white;
    }
    `}   
    </style>
  </div>
  );
}