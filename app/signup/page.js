import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function signup() {
  return (
    <form className='mx-auto max-w-md p-4'>
      <Input type='email' placeholder='email' />
      <Input type='password' placeholder='password' />
      <Button variant="bank" size='contact'>
            Signup
      </Button>
    </form>
  )
}