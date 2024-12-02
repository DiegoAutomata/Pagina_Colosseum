import React, { ReactNode } from 'react';

export default function ApplyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#2d3e48] to-[#5c7d8f]"
    >
      {children}
    </div>
  );
}
