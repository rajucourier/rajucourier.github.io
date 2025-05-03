import { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-[#1B284D] text-gray-200 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* <!-- Address Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Raju Courier</h3>
        <p className="text-sm">
          281,282,MIG-280<br/>
          Road No.4,KPHB Phase 1<br/>
          Kukatapally,Hyderabad<br/>
          Telangana 500072<br/>
          India<br/>
        </p>
      </div>
  
      {/* <!-- Social Links Section --> */}
      
  
      {/* <!-- Made With Love Message --> */}
      <div className="text-sm md:text-right">
        <p>Made with ❤️ by Raju Courier</p>
        <p>&copy; 2025 All rights reserved.</p>
      </div>
    </div>
      </footer>
      
    );
};

export default Footer;