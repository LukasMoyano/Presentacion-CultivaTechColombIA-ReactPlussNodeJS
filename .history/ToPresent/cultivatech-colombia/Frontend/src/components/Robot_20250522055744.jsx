import React from "react";

export default function Robot() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold cultiva-text-main mb-2">Control Robot "R2Campo"</h2>
      <p className="mb-6 cultiva-text-secondary">
        Visualiza la ubicación de tu robot en tiempo real, su ruta y controla sus operaciones básicas. (Visualización de mapa es un placeholder).
      </p>
                        <div class="card">
                            <div class="card-header flex items-center">
                                <span class="icon-placeholder">🤖</span> Robot CultivaTech "R2Campo"
                            </div>
                            <p><span class="font-semibold">Estado:</span> En base, cargando</p>
                            <p><span class="font-semibold">Batería:</span> <span class="icon-placeholder">🔋</span> 75%</p>
                            <p><span class="font-semibold">Conexión:</span> <span class="icon-placeholder">📶</span> Fuerte</p>
                            <div class="mt-4 space-y-2">
                                <button class="btn btn-primary w-full">Iniciar Monitoreo Programado</button>
                                <button class="btn btn-outline w-full" data-page-target="robot">Ver Mapa Robot</button>
                            </div>
                        </div>    </div>
  );
}