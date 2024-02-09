'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const initialState = {
    email: '',
    password: '',
};

export default function Page() {
    const [state, setState] = useState(initialState);
    const router = useRouter();

    function handleChange(event) {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    function onSubmit(event) {
        event.preventDefault();

        axios
            .post('api/userRoutes', state)
            .then(() => {
                router.refresh();
            })
            .then(() => {
                setTimeout(() => {
                    router.push('/login');
                }, 2500);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    return (
        <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
                <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email} />
                <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password} />
                <Button type='submit' variant='bank'>Submit</Button>
            </div>

            <div>
                <div>
                    Already have an account? <Link href='/login' className='text-blue-500'>Sign In</Link>
                </div>
            </div>
        </form>
    );
}
