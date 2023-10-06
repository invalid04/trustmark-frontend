import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'



export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-12 px-6 py-4 bg-[#FFFFFF]'>

        <div>
            <Link href='/' className='flex gap-2 items-center'>
              <Image 
                src='/tmark.png' 
                width={40}
                height={40}
              /> 
              <h1>Trustmark</h1>
            </Link>
        </div>

        <div className='flex gap-6'>
            <Link href='/'><h1>Example</h1></Link>
            <Link href='/'><h1>Example</h1></Link>
            <Link href='/'><h1>Example</h1></Link>
        </div>

        <div className='items-center'>
            <Button variant='bank' size='bank'>Login</Button>
        </div>

    </nav>
  )
}
