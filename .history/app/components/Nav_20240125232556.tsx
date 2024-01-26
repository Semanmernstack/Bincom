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
    <div className=' flex items-center justify-between   bg-slate-500 p-4 shadow-lg'>
        <Link href={'/'}>
            <h1 className='text-xl text-white font-extrabold'> Binvcom Hackathon  </h1>
        </Link>
        <div className='flex items-center justify-center gap-1 text-red-300 '>
            {Linkk.map((d, i) => (
            <div className='' key={i}>
                {pathname === d.href ? (
                <Link href={d.href} className=' flex  text-xs sm:text-lg text-pink-800 font-bold animate-pulse'>
                    {d.title}
                </Link>
                
                
                ):(
                    <Link href= {d.href }
                    className="flex items-center justify-center p-1   gap-3 italic sm:font-semibold hover:border rounded-lg text-pink-400   dark:text-white text-xs sm:text-lg font-semibold transition duration-100  "
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