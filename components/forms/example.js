import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs '>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
                <Input type='email' placeholder='this is an input' />
                <Input type='password' placeholder='this is also an input' />
                <Button>Button</Button>
            </form>
        </div>
    </div>
  )
}