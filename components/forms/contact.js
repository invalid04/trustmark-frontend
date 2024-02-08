import { createPost } from "@/app/actions/contactActions";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {


  return (
    <form className="mx-auto max-w-md p-4" action={createPost}>
      {/* Top Row */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Us!</h2>
      </div>

        // Form Inputs
        <div className="flex space-x-4">
          {/* Left Side */}
          <div className="w-1/2">
            <Input type="text" placeholder="First Name" className="mb-4" id='firstName' />
            <Input type="text" placeholder="Last Name" className="mb-4" id='lastName' />
            <Input type="email" placeholder="Email" className="mb-4" id='email' />
            <Input type="tel" placeholder="Phone Number" className="mb-4" id='phoneNumber' />
          </div>

          {/* Right Side */}
          <div className="w-1/2">
            <Textarea placeholder="Message" className="mb-4" id='message' />
            <Button type="submit" variant="bank" size="contact">
              Submit
            </Button>
          </div>
        </div>
      
    </form>
  );
}
