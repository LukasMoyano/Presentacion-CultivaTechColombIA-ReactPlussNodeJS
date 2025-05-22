import React from "react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold cultiva-text-main mb-6">Panel Principal</h2>
      <p className="mb-6 cultiva-text-secondary">
        Bienvenido a tu panel de control CultivaTech. Aquí encontrarás un resumen del estado de tus cultivos, alertas importantes y otra información relevante para ayudarte a tomar las mejores decisiones para tu campo.
      </p>
      {/* Aquí puedes migrar el resto del HTML de tu dashboard, recuerda class -> className */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ...cards aquí */}
        <div className="card md:col-span-2 lg:col-span-1">
          <div className="card-header flex items-center">
            <span className="icon-placeholder">⭐</span> Estado General: Tomates - Lote Sol Naciente
          </div>
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500 cultiva-text-white text-3xl font-bold mb-2">
              OK
            </div>
            <p className="cultiva-text-main text-lg font-semibold">Riego óptimo. Sin alertas.</p>
            <p className="cultiva-text-secondary text-sm">Temperatura promedio: 22°C</p>
            <button className="mt-3 text-sm btn btn-outline">Cambiar Cultivo</button>
          </div>
          <div className="h-48 chart-container">
            {/* Aquí puedes integrar tu gráfico */}
          </div>
        </div>
        {/* ...el resto de las cards (puedes copiar y adaptar de tu HTML) */}
      </div>
    </div>
  );
}