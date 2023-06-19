import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-screen h-screen overflow-y-scroll antialiased bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <div className="w-full text-slate-900">
          <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="font-extrabold tracking-widest text-white text-9xl">
              404
            </h1>
            <div className="absolute px-2 text-sm bg-white rounded rotate-12">
              Pokemon Not Found
            </div>
            <button className="mt-5">
              <div className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <Link href="/dashboard/pokemons">Go to Pokemon List</Link>
                </span>
              </div>
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
