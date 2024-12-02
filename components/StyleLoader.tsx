'use client';

import { useEffect } from 'react';

interface StyleLoaderProps {
  href: string;
  priority?: 'high' | 'low';
}

export default function StyleLoader({ href, priority = 'low' }: StyleLoaderProps) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    
    // Para estilos de alta prioridad, usamos preload
    if (priority === 'high') {
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'style');
      link.setAttribute('onLoad', "this.onload=null;this.rel='stylesheet'");
    } else {
      // Para estilos de baja prioridad, usamos print y cambiamos a all cuando cargue
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
    }

    // Añadir fetchPriority para navegadores modernos
    link.setAttribute('fetchPriority', priority === 'high' ? 'high' : 'low');
    
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, [href, priority]);
  
  return null;
}
