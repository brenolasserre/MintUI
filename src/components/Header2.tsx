import Button from "./Button";

const Header = () => {
    return ( 
    <div>
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-black transition-bg">
          {/* Background Animation */}
          <div className="inset-0 overflow-hidden">
              <div className="jumbo absolute -inset-[10px] opacity-50"></div>
          </div>
          {/* Pill */}
          <a className="mb-8 relative flex flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm shadow-[inset_0_-10px_10px_#a950ff36] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-6px_10px_#a950ff36]" href="/">🎉  
            <span className="animate-gradient bg-gradient-to-r from-[#aa4af0] via-[#d358e0] to-[#aa4af0] ml-2 bg-clip-text text-transparent">
              Building in Public
            </span> 
          <div className="absolute h-full w-full bg-gradient-to-r from-[#b942d6]/50 via-[#9c40ff]/50 to-[#386ad6]/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [--webkit-mask-composite:xor] [mask-composite:xor]"></div>
          </a>
          
          <h1 className="relative flex items-center justify-center text-5xl sm:text-6xl font-bold text-zinc-100 transition-colors w-2/3 sm:w-[52%] text-center">
            Building Stunning Websites Made Easy
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl mt-4 w-4/5 sm:w-1/2 text-center">
            Beautifully designed components. Customizable, Accessible, Open-Source and Free Forever.
          </p>
          {/* CTA */}
          <div className="flex items-center mt-8">
            <Button>Get Started</Button>
            <Button styling='ghost'><i className="bi bi-github"></i> Github</Button>
          </div>
      </div>
  </div>
    );
}
 
export default Header