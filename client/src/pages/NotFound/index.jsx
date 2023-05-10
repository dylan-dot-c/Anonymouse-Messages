export default function NotFound() {
    return (
        <section className=" flex justify-center flex-col gap-4 p-4 h-screen items-center max-w-lg mx-auto">
            <img src="/404-V3.svg" alt="Not Fount Route" className="w-4/5 mx-auto" />
            <h1 className="text-white/80 text-xl text-center">Oops! That might be an error or an incorrect route. Please try again later.</h1>
        </section>
    )
}