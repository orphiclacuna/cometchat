import { Button } from "../components/Button";
import cometchatLogo from "../assets/cometchat.png";
import moon from "../assets/moon-01.svg";

export default function Navbar() {

  return (
    <nav className="w-full max-w-[1440px] text-[14px] mx-auto flex flex-col items-center py-4 px-8 bg-brand-09">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <img src={cometchatLogo} alt="CometChat Logo" className="h-5 w-auto" />
        </div>
        <div className="hidden md:flex space-x-6 text-branddark-12">
          <a className="hover:text-brand-06">Platform</a>
          <a className="hover:text-brand-06">Solutions</a>
          <a className="hover:text-brand-06">Developers</a>
          <a className="hover:text-brand-06">Resources</a>
          <a className="hover:text-brand-06">Pricing</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a className="text-branddark-12 hover:text-brand-06 px-4 py-2 rounded-lg border border-transparent hover:border-brand-06">Log in</a>
          <Button text="Schedule a Demo" />
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <a className="text-white hover:text-brand-06 px-4 py-2 rounded-lg border border-transparent hover:border-brand-06">Log in</a>
          <button className="p-2 rounded-full hover:bg-gray-700">
            <img src={moon} alt="moon icon" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
