'use client';

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Image from 'next/image';
import { Suspense } from 'react';
import Link from 'next/link';

const ImageWithFallback = ({ src = '/images/default.jpg', alt = 'Descripción', ...props }: any) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      style={{ objectFit: 'contain', objectPosition: 'left' }}
      {...props}
      onError={(e: any) => {
        e.currentTarget.src = '/images/fallback.webp';
      }}
    />
  );
};

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navigation />
      
      {/* Sección Inicio */}
      <section id="home" className="min-h-screen flex items-start pt-36 pb-20 bg-gradient-to-b from-[#2d3e48] to-[#5c7d8f]">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-left">Descubre y Potencia tu Talento Único</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
            {/* Columna de texto */}
            <div className="text-left">
              <div className="space-y-8 text-lg text-gray-200">
                <p>
                  Sabemos que tienes una pasión especial y un brillo propio que merece ser compartido con el mundo. 
                  A veces, dar el siguiente paso puede sentirse abrumador, pero no tienes que hacerlo sola.
                </p>
                <p>
                  En nuestro equipo, estamos aquí para acompañarte en este viaje. Nuestro objetivo es ayudarte a crecer en OnlyFans, 
                  para que puedas enfocarte en lo que realmente te apasiona: crear contenido auténtico y disfrutar de las ganancias haciendo lo que te apasiona.
                </p>
                <p>
                  Queremos que sientas que tienes a un grupo de profesionales de tu lado, apoyándote en cada paso y celebrando tus logros contigo. 
                  Juntos, podemos transformar tus sueños en realidad y construir algo increíble.
                </p>
                <p className="font-semibold text-xl">
                  ¡Contáctanos hoy mismo y comencemos a impulsar tu éxito!
                </p>
                <div className="mt-8">
                  <Link 
                    href="/apply"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-105"
                  >
                    Comenzar Ahora
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Columna para la imagen */}
            <div className="flex justify-center items-start">
              <div className="relative w-full max-w-md">
                <Suspense fallback={<div className="w-full h-[768px] bg-gray-800 animate-pulse rounded-2xl" />}>
                  <ImageWithFallback
                    src="/images/modelo1.webp"
                    alt="Modelo en la playa con equipo de buceo"
                    width={512}
                    height={768}
                    className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500"
                    quality={100}
                    priority
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#2d3e48] to-[#162026]">
        <Suspense fallback={<div className="w-full h-96 bg-gray-800 animate-pulse" />}>
          <About />
        </Suspense>
      </section>

      {/* Sección de Servicios */}
      <section className="bg-gradient-to-b from-[#162026] to-[#0d1418]">
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Esto es lo que hacemos al respecto:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna de imágenes */}
            <div className="hidden lg:block">
              <div className="flex gap-4">
                {/* Imagen principal */}
                <div className="relative w-[250px] h-[500px] rounded-3xl overflow-hidden">
                  <Suspense fallback={<div className="w-full h-full bg-gray-800 animate-pulse rounded-3xl" />}>
                    <ImageWithFallback
                      src="/images/ganacias.webp"
                      alt="Gráfico de ganancias"
                      width={250}
                      height={500}
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="object-contain hover:scale-105 transition-transform duration-500"
                      quality={85}
                    />
                  </Suspense>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative w-[250px] h-[240px] rounded-3xl overflow-hidden">
                    <Suspense fallback={<div className="w-full h-full bg-gray-800 animate-pulse rounded-3xl" />}>
                      <ImageWithFallback
                        src="/images/ganancias2.webp"
                        alt="Estado de cuenta 1"
                        width={250}
                        height={240}
                        sizes="(max-width: 768px) 100vw, 250px"
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        quality={85}
                      />
                    </Suspense>
                  </div>
                  <div className="relative w-[250px] h-[240px] rounded-3xl overflow-hidden">
                    <Suspense fallback={<div className="w-full h-full bg-gray-800 animate-pulse rounded-3xl" />}>
                      <ImageWithFallback
                        src="/images/ganancias3.webp"
                        alt="Estado de cuenta 2"
                        width={250}
                        height={240}
                        sizes="(max-width: 768px) 100vw, 250px"
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        quality={85}
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Columna de servicios */}
            <Suspense fallback={<div className="w-full h-96 bg-gray-800 animate-pulse" />}>
              <Services />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Sección FAQ */}
      <section id="faq" className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-[#0d1418] to-[#5c7d8f]">
        <Suspense fallback={<div className="w-full h-96 bg-gray-800 animate-pulse" />}>
          <FAQ />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}