// src/components/Navbar.tsx
import { Link } from "react-router";
import { JSX, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop-in-india", label: "How it Works?" },
    { href: "/pricing", label: "Pricing" },
    { href: "/aboutus", label: "About us" },
    { href:'/faq', label: "FAQs" },
  ];

  return (
    <nav className="sticky top-0 bg-[#1D2951] text-white py-4 px-10 shadow-md border-b-1 border-b-[#F7AA18] sm:px-[4px] md:px-[50px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <Link to="/" className="text-xl font-bold text-white">
            Raju Courier
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="hover:text-[#F7AA18] text-white transition-colors text-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1D2951] text-white">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="hover:text-[#F7AA18] transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
