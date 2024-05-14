"use client"

import React, { useEffect, ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0); // Rolagem para o topo
    };

    // Rolagem para o topo ao montar o componente
    handleScrollToTop();

    return () => {}; // Nenhuma limpeza necessária
  }, []);

  return <>{children}</>;
};

export default ClientProvider;
