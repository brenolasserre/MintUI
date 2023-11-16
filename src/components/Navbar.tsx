const Navbar = () => {
    return ( 
    
    <nav className="z-50 gradient flex flex-row items-center justify-between px-8 sm:px-44 py-6 fixed object-top-0 backdrop-filter backdrop-blur text-white w-full">       
        <a href="/">
        <h1 className="flex items-center text-2xl font-bold text-zinc-200 transition-colors">
              breno
              <span className="ml-[.25em] rounded-md bg-zinc-200 text-sm p-1 leading-none">
                  <span className="text-black">UI</span>
              </span>
          </h1>
          </a>
        
        {/* links */}
        <div className="text-zinc-400 ml-auto mr-12 space-x-6 hidden sm:block">
            <a href="/" className="hover:text-zinc-300 duration-150">Documentation</a>
            <a href="/" className="hover:text-zinc-300 duration-150">Components</a>
            <a href="/" className="hover:text-zinc-300 duration-150">Examples</a>
        </div>

        {/* social */}
        <div>
        <a href="/"><i className="bi bi-twitter-x"></i></a>
            <a href="/"><i className="bi bi-github mx-4"></i></a>
        </div>
    </nav>

    );
}
 
export default Navbar;