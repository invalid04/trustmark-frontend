'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here

    // Set formSubmitted to true after successful form submission
    setFormSubmitted(true);
  };

  const handleReset = () => {
    // Reset the formSubmitted state to false when the button is clicked
    setFormSubmitted(false);
  };

  return (
    <form className="mx-auto max-w-md p-4" onSubmit={handleSubmit}>
      {/* Top Row */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Us!</h2>
      </div>

      {/* Conditional Thank You Prompt */}
      {formSubmitted ? (
        <div className="mb-6">
          <p>Thank you for contacting Trustmark!</p>
          <Button onClick={handleReset} variant="bank" size="contact">
            Close
          </Button>
        </div>
      ) : (
        // Form Inputs
        <div className="flex space-x-4">
          {/* Left Side */}
          <div className="w-1/2">
            <Input type="text" placeholder="First Name" className="mb-4" />
            <Input type="text" placeholder="Last Name" className="mb-4" />
            <Input type="email" placeholder="Email" className="mb-4" />
            <Input type="tel" placeholder="Phone Number" className="mb-4" />
          </div>

          {/* Right Side */}
          <div className="w-1/2">
            <Textarea placeholder="Message" className="mb-4" />
            <Button type="submit" variant="bank" size="contact">
              Submit
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
