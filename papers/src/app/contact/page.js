import Footer from "@/components/footer";
import Navbar from "@/components/navbar-branch";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <div className="mx-auto max-w-5xl gap-8 px-4 p-24">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Contact us whenever
                    </h2>
                </div>

                <div className="flex flex-col mx-auto max-w-5xl gap-8 px-4">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Email
                        </h2>
                        <p className="mb-4 text-l text-neutral-600 md:text-xl">
                            <a className="underline" href="mailto:example@gmail.com">Example@gmail.com</a>
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">
                            Phone
                        </h2>
                        <p className="mb-4 text-l text-neutral-600 md:text-xl">
                            +1 800 123 4567
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl gap-8 px-4 p-24">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        or fill out the form.
                    </h2>
                </div>
            </div>
        </>
    )
}