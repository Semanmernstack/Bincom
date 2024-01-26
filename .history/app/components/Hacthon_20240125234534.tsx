import React from 'react'
import slidefour from "../public/slidefour.png"


import slidethree from "../public/slidethree.png"
import SetUp from "../components/SetUp";


const data = [
  {
    id: "1",
    title: "Seyi Abejide",
    image:"seyi.jpg",
    role: "Next js developer",
    gender: "Male",
   
  },
  {
    id: "2",
    title: "Sewa Ayobami",
    image: "ope.jpg",
    role: "Ui/Ux designer",
    gender: "Female"

  },
  {
    id: "3",
    title: "Ibrahim Adekunle",
    image:"yemi.jpg",
    role: "Cloud developer",
    gender: "male",
   
  },
  {
    id: "4",
    title: "Bolaji Adeshina",
    image: "kay.jpg",
    role: "Backend developer",
    gender: "Male",

  },
  {
    id: "5",
    title: "Olisa Uwadinmah",
    image: "slidethree.png",
    role: "Project manager",
    gender: "Male",

  },


];

function Hacthon() {
  return (
    <main className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data.map((p, index)=> (
              <div className=" border-2 border-blue-300 shadow-md items-center justify-center flex" key={index}>
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
  )
}

export default Hacthon