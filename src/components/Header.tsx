import { GraduationCap, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "VMBO", href: "#vmbo" },
    { label: "HAVO", href: "#havo" },
    { label: "VWO", href: "#vwo" },
    { label: "Over ons", href: "#over" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-full p-2">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">Studiekeuze Gids</h1>
              <p className="text-xs text-muted-foreground">Jouw school, jouw toekomst</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:flex"
              asChild
            >
              <a href="https://www.qompas.nl/aanmelden/" target="_blank" rel="noopener noreferrer">
                Qompas
              </a>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                  <Download className="h-4 w-4" />
                  Downloads
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background z-50" align="end">
                <DropdownMenuItem asChild>
                  <a 
                    href="https://griftland.nl/wp-content/uploads/2025/09/LOB-Verlofaanvraagformulier-mavo-nieuw-sep25.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-blue-500">🔵</span>
                    <span>Mavo LOB-verlofaanvraagformulier</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://griftland.nl/wp-content/uploads/2025/09/LOB-Verlofaanvraagformulier-havo-nieuw-sep25-.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-yellow-500">🟡</span>
                    <span>Havo LOB-verlofaanvraagformulier</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://griftland.nl/wp-content/uploads/2025/09/LOB-Verlofaanvraagformulier-vwo-nieuw-sep25.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-red-500">🔴</span>
                    <span>Vwo LOB-verlofaanvraagformulier</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="w-full mt-2"
              asChild
            >
              <a href="https://www.qompas.nl/aanmelden/" target="_blank" rel="noopener noreferrer">
                Qompas
              </a>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full mt-2 gap-2">
                  <Download className="h-4 w-4" />
                  Downloads
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background z-50" align="end">
                <DropdownMenuItem asChild>
                  <a 
                    href="https://griftland.nl/wp-content/uploads/2025/09/LOB-Verlofaanvraagformulier-mavo-nieuw-sep25.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-blue-500">🔵</span>
                    <span>Mavo LOB-verlofaanvraagformulier</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://griftland.nl/wp-content/uploads/2025/09/LOB-Verlofaanvraagformulier-havo-nieuw-sep25-.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-yellow-500">🟡</span>
                    <span>Havo LOB-verlofaanvraagformulier</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://griftland.nl/wp-content/uploads/2025/09/LOB-Verlofaanvraagformulier-vwo-nieuw-sep25.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-red-500">🔴</span>
                    <span>Vwo LOB-verlofaanvraagformulier</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        )}
      </div>
    </header>
  );
};
