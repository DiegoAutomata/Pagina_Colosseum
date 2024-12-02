"use client";
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`relative flex items-center h-full ${className}`}>
      <div className="w-[370px] h-[64px] relative">
        <Image
          src="/images/logo-sin-fondo.webp"
          alt="Colosseum MGMT Logo"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          sizes="370px"
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default Logo;