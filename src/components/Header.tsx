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
          <a className="bg-[#0f6bec17] mb-4 flex items-center hover:bg-[#0f6bec3f] text-sm md:text-md 2xl:text-md text-[var(--blue)] px-4 py-1.5 transition-all  ease-in-out duration-300 rounded-full shadow-inner shadow-[var(--blue)] border border-[var(--blue)] z-10" href="/">
            Building in Public         
          </a>
          
          <h1 className="relative flex items-center justify-center text-5xl sm:text-6xl font-bold text-zinc-100 transition-colors w-2/3 sm:w-[52%] text-center">
            Building Stunning Websites Made Easy
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl mt-4 w-4/5 sm:w-1/2 text-center">
            Beautifully designed components. Customizable, Accessible, Open-Source and Free Forever.
          </p>
          {/* CTA */}
          <div className="flex items-center justify-center gap-x-4 mt-8">
            <Button styling="primary">Get Started</Button>
            <Button styling="ghost"><i className="bi bi-github"></i> Github</Button>
          </div>
      </div>
  </div>
    );
}
 
export default Header