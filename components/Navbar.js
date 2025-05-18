import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <div className="flex text-white justify-between bg-purple-500 ">
        <Link href="/"><div className="text-2xl p-3 font-bold ">  BitLink</div></Link>
            <ul className='flex p-3'>
                <Link href="/"><li className='px-2 text-lg'>Home</li></Link>
                <Link href="/about"><li className='px-2 text-lg'>About</li></Link>
                <Link href="/shorten"><li className='px-2 text-lg'>Shortner</li></Link>
                <Link href="/contact"><li className='px-2 text-lg'>Contact</li></Link>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
