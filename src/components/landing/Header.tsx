import { Button } from "@/components/ui/button";
import { LogInIcon, UserPlus } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CR</span>
            </div>
            <span className="text-xl font-bold text-foreground">Crhub</span>
          </a>

          {/* Social + Actions */}
          <div className="hidden md:flex items-center gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              <FaWhatsapp size={24} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sistema.crhub?igsh=MXZodGhmbXFrc3k3cQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={24} />
            </a>

            {/* Pipe */}
            <span className="h-6 w-px bg-border mx-1" />

            {/* Login */}
            <Button
              variant="ghost"

              className="flex items-center gap-2 text-foreground"
            >
              <LogInIcon size={16} />
              <a href="https://sistema-mu-ten.vercel.app/">
                Login
              </a>
            </Button>

            {/* Criar Conta */}
            <Button className="gradient-primary border-0 flex items-center gap-2">
              <UserPlus size={16} />
              Criar conta
            </Button>

          </div>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">

              <div className="flex items-center justify-center gap-6">
                <FaWhatsapp size={26} className="text-primary" />
                <FaInstagram size={26} className="text-primary" />
              </div>

              <Button variant="outline" className="w-full">
                Login
              </Button>

              <Button className="gradient-primary border-0 w-full">
                Criar conta
              </Button>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
