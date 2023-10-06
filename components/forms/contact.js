import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs '>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
                <Input type='text'  placeholder='First Name' />
                <Input type='text'  placeholder='Last Name' />
                <Input type='email' placeholder='Email' />
                <Input type='tel'   placeholder='Phone Number' />
                <Button variant='bank'>Submit</Button>
            </form>
        </div>
    </div>
  )
}