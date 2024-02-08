'use client'

import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react"
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar({ myUser }) {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
      <nav className='flex justify-between items-center h-12 px-6 py-4 bg-[#FFFFFF]'>
        <div>
          <Link href='/' className='flex gap-1 items-center'>
            <Image
              src='/tmark.png'
              width={50}
              height={50}
              alt='logo'
            />
            <h1 className='text-2xl font-extrabold text-gray-500'>Trustmark</h1>
          </Link>
        </div>

        <div className='flex gap-6'>
          <Link href='/' className='border-b-2 border-transparent hover:border-blue-600'>
            Example
          </Link>

          <Link href='/ContactResponsePage' className='border-b-2 border-transparent hover:border-blue-600'>
            Responses
          </Link>

          <Link href='/' className='border-b-2 border-transparent hover:border-blue-600'>
            Example
          </Link>
        </div>

        <div className='items-center'>
          {!myUser ? (
            <Button variant='bank' size='bank'><Link href='/login'>Login</Link></Button>
              ) : (
                <div className="w-[40px] h-[40px] rounded-full bg-[#006bb6] flex items-center justify-center text-white cursor-pointer" onClick={() => setUserMenuOpen(prev => !prev)}>
                  <span>{myUser.email.charAt(0)?.toUpperCase()}</span>
                  <span>{myUser.email.charAt(1)?.toUpperCase()}</span>
                </div>
              )}
              {userMenuOpen && myUser && (
                <div className="absolute top-16 right-0 z-10 mr-4">
                  <Button variant='destructive' onClick={() => signOut()}>Sign Out</Button>
                </div>
              )}
        </div>

      </nav>
    );
}



