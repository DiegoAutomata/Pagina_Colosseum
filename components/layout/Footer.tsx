"use client";

import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050709] py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300 hover:text-white transition-colors">
            {new Date().getFullYear()} Colosseum MGMT. Todos los derechos reservados.
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link 
              href="mailto:colosseummgmt@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>colosseummgmt@gmail.com</span>
            </Link>
            
            <Link 
              href="https://instagram.com/colosseum.mgmt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@colosseum.mgmt</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}