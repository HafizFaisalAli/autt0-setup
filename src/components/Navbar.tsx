"use client"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="flex md:flex-row flex-col md:justify-between justify-center items-center px-32 md:py-4 border-b">
        <section>
          <h1 className="text-3xl cursor-pointer" onClick={() => router.push('/')}>Auth0</h1>
        </section>
        <section className="flex gap-4">
          <button className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => router.push('/signin')}>
            Sign In
          </button>
          <button className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => router.push('/signup')}>
            Sign Up
          </button>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
