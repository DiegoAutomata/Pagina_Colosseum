"use client";
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative w-[200px] sm:w-[300px] md:w-[450px] h-[70px] sm:h-[80px] md:h-[90px]">
        <Image
          src="/images/logo-sin-fondo.webp"
          alt="Colosseum MGMT Logo"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, 450px"
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default Logo;