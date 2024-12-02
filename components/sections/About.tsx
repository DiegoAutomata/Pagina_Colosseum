import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Imagen del lado izquierdo */}
          <div className="relative w-full max-w-[400px] mx-auto overflow-hidden rounded-2xl">
            <Image
              src="/images/modelo3.webp"
              alt="Modelo Colosseum MGMT"
              width={400}
              height={600}
              className="w-full h-auto rounded-2xl object-contain hover:scale-105 transition-transform duration-500"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEkKSY1MDAMLC4wNDQ+Pj1AQD5FRUVGSU5PRklXWFdcXVJRUv/2wBDAR"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          {/* Texto del lado derecho */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sobre Nosotros
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos estrategas, conversadores y expertos en promocionar tu OnlyFans, 
              comprometidos a identificar lo que impulsa tu crecimiento y desbloquear 
              nuevas oportunidades para llevar tu cuenta al siguiente nivel.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Creemos en relaciones a largo plazo con nuestras modelos, priorizando 
              la comunicación y tu bienestar emocional, porque sabemos que el éxito 
              comienza con un equipo que te entiende y te apoya.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              ¡Juntos podemos alcanzar nuevas metas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
