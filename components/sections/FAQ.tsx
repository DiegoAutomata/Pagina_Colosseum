'use client';

import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  hasEnumeration?: boolean;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Por qué debería trabajar con una agencia?",
    answer: "Si estas teniendo alguna de estas complicaciones:\n\n• Falta de tiempo para gestionar todo\n• Dificultad para promocionarte\n• Dificultad para relacionarte con tus fanáticos\n• Ganancias inestables\n• Competencia en la plataforma\n• Falta de creatividad\n• Cobro de ganancias\n• Gestión emocional\n\nAplica ahora y nos pondremos en contacto en la brevedad.",
    hasEnumeration: true
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Los únicos requisitos son:\n\n• Ser mayor de edad\n• Tener muchas ganas de crear contenido\n• Tener un teléfono con una cámara decente",
    hasEnumeration: true
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Dependerá de la predisposición de la modelo para seguir las instrucciones que le demos. Por nuestra parte el equipo dará su 100% para ayudarte a cumplir tus metas. Nuestros clientes comienzan a ver ganancias significativas en 1 - 2 meses."
  },
  {
    question: "¿Qué servicios incluye la gestión?",
    answer: "Nuestro servicio incluye:\n\n• Gestión completa y crecimiento en redes sociales\n• Chatting\n• Optimización de perfiles\n• Asesoría en la creación de contenido\n• Auditorías regulares\n• Asesoramiento fiscal",
    hasEnumeration: true
  },
  {
    question: "¿Hay riesgo de que mis conocidos me descubran?",
    answer: "OnlyFans permite bloquear países y las redes sociales van orientadas a una audiencia anglosajona. Si bien existe la pequeña posibilidad de que alguien te encuentre en redes sociales, ¿crees que te importaría si estás generando $10.000 USD al mes?"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Aquí podrías manejar cualquier lógica dependiente del cliente
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatAnswer = (answer: string, hasEnumeration?: boolean) => {
    if (!hasEnumeration) return answer;

    return answer.split('\n').map((line, index) => {
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start space-x-2 ml-4 mb-2">
            <span className="text-pink-400">•</span>
            <span>{line.trim().substring(1).trim()}</span>
          </div>
        );
      }
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-[#00B6FF]">PREGUNTAS</span><br />
        <span className="text-[#00B6FF]">FRECUENTES</span>
      </h2>
      
      <div className="space-y-4" role="list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300/20 rounded-lg overflow-hidden"
            role="listitem"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full p-6 flex justify-between items-center text-left focus:outline-none bg-gray-800/30 hover:bg-gray-700/30 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium pr-8">{item.question}</span>
              <Plus
                className={`flex-shrink-0 w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              />
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 border-t border-gray-300/20 bg-gray-800/20">
                {formatAnswer(item.answer, item.hasEnumeration)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
