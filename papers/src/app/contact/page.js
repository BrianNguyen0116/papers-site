import Navbar from "@/components/navbar-branch";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <div className="mx-auto max-w-5xl gap-8 px-4 pt-24 pb-16">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Contact
                    </h2>
                    <p className="mb-4 text-l text-neutral-600 md:text-xl">
                        Get started on getting the best that you deserve.
                    </p>
                </div>

                <div className="flex flex-col mx-auto max-w-5xl gap-8 px-4">
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
                            <form action="mailto:brian.nguyen0116@gmail.com" className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium text-neutral-600 md:text-xl">Email</label>
                                    <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="email@address.com" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 font-medium text-neutral-600 md:text-xl">Subject</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 font-medium text-neutral-600 md:text-xl">Your message</label>
                                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-main hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                            </form>
                        </div>
                        </section>
                </div>
            </div>
        </>
    )
}