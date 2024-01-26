import Image from "next/image";
import SetUp from "./components/SetUp";
interface B {
  id: string
  title: string
  image: string
}

const gender = [
  {
    id: "1",
    title: "Seyi Abejide",
    image:"@/public/slidefour.png",
   
  },
  {
    id: "2",
    title: "Swea Ayobami",
    image:"./public/slidethree.png",

  },
];



export default function Home() {
  return (
    <main className="">
      
        {gender.map((p, index)=> (
          <div key={index}>
            <SetUp 
              id={p.id}
              title={p.title}
              image={p.image}
            />
          </div>

        ))} 
      
      
    </main>
  );
}
