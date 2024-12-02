'use client';

import { MessageSquare, Users, TrendingUp, Shield, HeartHandshake, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Gestión de Chats",
      description: "Manejo profesional de tus conversaciones con fans, maximizando la interacción y las ganancias."
    },
    {
      icon: Users,
      title: "Gestión de Redes Sociales",
      description: "Estrategias efectivas para aumentar tu presencia en redes y atraer más seguidores."
    },
    {
      icon: TrendingUp,
      title: "Optimización de Perfiles",
      description: "Mejoramos tu perfil para destacar entre la competencia y atraer más suscriptores."
    },
    {
      icon: Shield,
      title: "Protección y Seguridad",
      description: "Garantizamos la seguridad de tu contenido y datos personales en todo momento."
    },
    {
      icon: HeartHandshake,
      title: "Soporte Personalizado",
      description: "Atención dedicada para resolver tus dudas y ayudarte a alcanzar tus metas."
    },
    {
      icon: DollarSign,
      title: "Gestión Financiera",
      description: "Optimizamos tus ingresos y te ayudamos con la gestión de pagos y facturación."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="mb-4 p-4 rounded-2xl border border-pink-400/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-pink-400/20 shrink-0">
                <service.icon className="w-6 h-6 text-pink-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
