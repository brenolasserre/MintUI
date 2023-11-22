import { useEffect, useState } from "react";

interface FormattedNumber {
  stargazers_count: number;
}

const Navbar = () => {
  const [counterValue, setCounterValue] = useState<string | null>(null);

  function formatNumber(number: FormattedNumber['stargazers_count']): string | number {
    if (number <= 1000) {
      return number;
    } else if (number > 1000 &&  number < 999999) {
      return (number/1000).toFixed(1) + 'k';
    } else if (number >= 1000000){
      return (number/1000000).toFixed(1) + 'M';
    }
    throw new Error('Invalid number format');
    }    

  useEffect(() => {
    async function getCounter() {
      try {
        const res = await fetch("https://api.github.com/repos/wasmerio/wasmer");
        if (!res.ok) {
          throw new Error("Hubo un problema con la API");
        }
        const data = await res.json();
        const stargazersCount = data.stargazers_count;
        const formattedData = formatNumber(stargazersCount);
        setCounterValue(formattedData.toString());
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    }
    getCounter();
  }, []);


  return (
    <nav className="z-50 gradient flex flex-row items-center justify-between px-8 sm:px-44 py-6 fixed object-top-0 backdrop-filter backdrop-blur text-white w-full">
      <a href="/">
        <h1 className="flex items-center text-2xl font-bold text-zinc-200 transition-colors">
          mint
          <span className="ml-[.25em] rounded-md bg-[var(--blue)] text-sm p-1 leading-none">
            <span className="text-black">UI</span>
          </span>
        </h1>
      </a>
      {/* links */}
      <div className="text-zinc-400 ml-auto mr-12 space-x-6 hidden sm:block">
        {/* Your existing links */}
        <a href="/" className="hover:text-zinc-300 duration-150">Components</a>
        <a href="/" className="hover:text-zinc-300 duration-150">Blocks</a>
        <a href="/" className="hover:text-zinc-300 duration-150">Documentation</a>
      </div>

      {/* social */}
      <div className="flex items-center">
        <a href="/">
          <i className="bi bi-twitter-x mr-4 text-lg text-zinc-300 hover:text-zinc-200 duration-150"></i>
        </a>
        
        <a href="/" className="flex items-center text-zinc-300 hover:text-zinc-200 duration-150">
          <i className="bi bi-github text-lg"></i>
          <span className="inline-flex items-center rounded-md py-0.5 text-sm w-12">
          {counterValue}+
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
