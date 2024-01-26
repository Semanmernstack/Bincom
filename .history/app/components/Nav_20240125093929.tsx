"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const Linkk = [
    {
        href: "/about",
        title: "about"
    },
    {
        href: "/winner",
        title: "Winning team"
    },
    {
        href: "/testimony",
        title: "Testimonial",
    },
]

function Nav() {
    const pathname = usePathname()
  return (
    <div className=' flex items-center justify-between   bg-slate-500 p-2 shadow-lg text-white'>
        <div>
            <h1 className='text-xl font-extrabold'> Benvcom Hackathon  </h1>
        </div>
        <div className='flex gap-2 '>
        {Linkk.map((d, i) => (
        <div className='' key={i}>
           {pathname === d.href ? (
        <Link href={d.href} className='text-xs sm:text-lg text-pink-800 font-bold animate-pulse'>
            {d.title}
        </Link>
           
        
           ):(
            <Link href= {d.href }
            className="flex   p-2 gap-1 italic sm:font-semibold hover:border rounded-lg text-pink-400  text-slate-800 dark:text-white text-xs sm:text-lg font-bold transition duration-100  "
            >
                {d.title}
            </Link>

           )}
        </div>

       ))}

        </div>
      

    
    

</div>
  )
}

export default Nav