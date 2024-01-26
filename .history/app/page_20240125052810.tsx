import slidefour from "../public/slidefour.png"


import slidethree from "../public/slidethree.png"
import SetUp from "./components/SetUp";


const data = [
  {
    id: "1",
    title: "Seyi Abejide",
    image:"slidefour.png",
    role: "Deveops",
    gender: "Female",
   
  },
  {
    id: "2",
    title: "Sewa Ayobami",
    image: "slidethree.png",
    role: "Next js developer",
    gender: "Female"

  },
  {
    id: "3",
    title: "Ibrahim Adekunle",
    image:"slidefour.png",
    role: "Cloud developer",
    gender: "male",
   
  },
  {
    id: "4",
    title: "Bolaji Adeshina",
    image: "slidethree.png",
    role: "Backend developer",
    gender: "Male",

  },
  {
    id: "5",
    title: "Olisa Uwadinmah",
    image: "slidethree.png",
    role: "ui/ux designer",
    gender: "Male",

  },


];



export default function Home() {
  return (
    <main className=" flex flex-col max-w-3xl mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.map((p, index)=> (
              <div className=" border items-center justify-center" key={index}>
                <SetUp 
                  id={p.id}
                  title={p.title}
                  image={p.image}
                  role={p.role}
                  gender= {p.gender}
                />
              </div>

          ))} 
      

      </div>
      
        
      
    </main>
  );
}
