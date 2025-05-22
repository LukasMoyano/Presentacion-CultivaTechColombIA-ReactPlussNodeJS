import React from "react";

export default function Cultivos() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold cultiva-text-main">Mis Cultivos</h2>
        <button className="btn btn-primary flex items-center">
          <span className="icon-placeholder text-xl mr-1 cultiva-text-white">➕</span> Añadir Cultivo
        </button>
      </div>
      <p className="mb-6 cultiva-text-secondary">Gestiona y monitorea todos tus cultivos registrados. Selecciona un cultivo para ver su estado detallado, historial de sensores y alertas específicas.</p>
      {/* Aquí puedes migrar el HTML de la lista/detalle de cultivos */}
    </div>
  );
}