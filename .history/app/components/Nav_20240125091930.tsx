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
    <div>
        <div>
            <h1> Benvcom Hackathon  </h1>
        </div>
       {Linkk.map((d, i) => (
        <div key={i}>
           {pathname === d.href ? (
        <Link href={d.href} className='text-sm sm:text-lg text-red-800 font-semibold animate-pulse'>
            {d.title}
        </Link>
           
        
           ):(
            <Link href= {d.href }
            className="flex   p-2 gap-1 italic sm:font-semibold hover:border rounded-lg border-teal-700  text-slate-800 dark:text-white text-sm sm:text-lg font-bold transition duration-100  "
            >
                {d.title}
            </Link>

           )}
           </div>

       ))}

    
    

</div>
  )
}

export default Nav