import React from "react";

export const Form = () => {
    return <form
        action="https://public.herotofu.com/v1/8e348a60-928f-11ed-a003-6f0b76086b1c"
        method="post"
        className='flex flex-col'
    >

        <input className='my-4 border border-amber-50 text-amber-50   bg-gray-800 p-1  ' name="Name" id="name"
               placeholder="Name" required/>
        <input className='my-4 border border-amber-50 text-amber-50 bg-gray-800 p-1 ' name="Email" id="email"
               type="email" placeholder="Mail" required/>
        <textarea className='my-4 border border-amber-50 text-amber-50  bg-gray-800 p-1  ' name="Message" id="message"
                  placeholder="Message" required></textarea>
        <button className='text-gray-500 w-40 bg-amber-50 text-l p-2 text-center hover:bg-amber-200 mb-3 '
                type='submit'> Send Message
        </button>
    </form>
}