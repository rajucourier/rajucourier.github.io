import { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-[#1B284D] text-gray-200 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* <!-- Address Section --> */}
      <div>
        <img src="./logo.svg" alt="Logo" width={100} height={100} className="mb-1" />
        <h3 className="text-lg font-semibold">RAJU COURIER - (Personal Shopper Service & International Courier)</h3>
        <p className="text-sm">
          281,282,MIG-280<br/>
          Road No.4,KPHB Phase 1<br/>
          Kukatapally,Hyderabad<br/>
          Telangana 500072<br/>
          India<br/>
        </p>
      </div>
  
      {/* <!-- Social Links Section --> */}
      
  
     
    </div>
     {/* <!-- Made With Love Message --> */}
     <div className="text-sm md:text-center">
        <p>Made with ❤️ by Raju Courier</p>
        <p>&copy; 2025 All rights reserved.</p>
      </div>
      </footer>
      
    );
};

export default Footer;