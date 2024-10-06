"use client"

import { useState } from "react"
import Navbar from "@/components/navbar-branch";

export default function Home() {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    subject,
                    message,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Error sending message');
            }
        } catch (err) {
            console.error('Error', err);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen my-12">
                <div className="mx-auto max-w-5xl gap-8 px-4 p-8">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Contact
                    </h2>
                    <p className="mb-4 text-l text-neutral-600 md:text-xl">
                        Get started on getting the best that you deserve.
                    </p>
                </div>

                <div className="flex flex-col mx-auto max-w-5xl gap-8 p-4">
                    <div className="py-4">
                        <h2 className="text-3xl font-bold">
                            Email us at
                        </h2>
                        <p className="text-l text-neutral-600 md:text-xl">
                            <a className="underline" href="mailto:example@gmail.com">contact@papersinc.ca </a>
                        </p>
                    </div>

                    <section>
                        <div className="py-2 lg:py-4 max-w-screen-md">
                            <form onSubmit={onSubmit} className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium text-neutral-600 md:text-xl">Email</label>
                                    <input 
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " 
                                        placeholder="email@address.com" 
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 font-medium text-neutral-600 md:text-xl">Subject</label>
                                    <input 
                                        type="text" 
                                        value={subject} 
                                        onChange={(e) => setSubject(e.target.value)} 
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                                        placeholder="Let us know how we can help you" 
                                        required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 font-medium text-neutral-600 md:text-xl">Your message</label>
                                    <textarea 
                                        rows="6" 
                                        value={message} 
                                        onChange={(e) => setMessage(e.target.value)} 
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " 
                                        placeholder="Leave a comment...">
                                    </textarea>
                                </div>
                                <button 
                                type="submit" 
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-main hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                            </form>
                        </div>
                        </section>
                </div>
            </div>
        </>
    )
}