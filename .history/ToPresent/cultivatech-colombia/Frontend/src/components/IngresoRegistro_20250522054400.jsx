import React, { useState } from "react";

export default function IngresoRegistro() {
  const [showRegistro, setShowRegistro] = useState(false);

  return (
    <div className="container mx-auto max-w-md p-4">
      <h2 className="text-3xl font-bold cultiva-text-main mb-6 text-center">Bienvenido a CultivaTech</h2>
      <div className="card">
        {!showRegistro ? (
          <div>
            {/* Formulario Ingreso */}
            <h3 className="text-2xl font-semibold cultiva-text-main mb-4 text-center">Ingresar</h3>
            <form>
              <div className="mb-4">
                <label className="block cultiva-text-secondary text-sm font-bold mb-2">Correo o Teléfono:</label>
                <input type="text" className="shadow appearance-none border rounded w-full py-3 px-4 cultiva-text-main leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="su@correo.com" />
              </div>
              <div className="mb-6">
                <label className="block cultiva-text-secondary text-sm font-bold mb-2">Contraseña:</label>
                <input type="password" className="shadow appearance-none border rounded w-full py-3 px-4 cultiva-text-main leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="********" />
                <a href="#" className="inline-block align-baseline font-bold text-sm cultiva-green-secondary hover:text-green-700 mt-2">¿Olvidaste tu contraseña?</a>
              </div>
              <div className="flex items-center justify-between">
                <button className="btn btn-primary w-full" type="button" onClick={() => alert("Ingreso simulado exitoso!")}>Ingresar</button>
              </div>
            </form>
            <p className="text-center cultiva-text-secondary mt-4">¿No tienes cuenta? <button className="font-bold cultiva-green-secondary hover:text-green-700" onClick={() => setShowRegistro(true)}>Regístrate</button></p>
          </div>
        ) : (
          <div>
            {/* Formulario Registro */}
            <h3 className="text-2xl font-semibold cultiva-text-main mb-4 text-center">Crear Cuenta</h3>
            <form>
              <div className="mb-4">
                <label className="block cultiva-text-secondary text-sm font-bold mb-2">Número de Teléfono: <span className="icon-placeholder">📱</span></label>
                <input type="tel" className="shadow appearance-none border rounded w-full py-3 px-4 cultiva-text-main leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="+57 300 1234567" />
              </div>
              <div className="mb-4">
                <label className="block cultiva-text-secondary text-sm font-bold mb-2">Contraseña: <span className="icon-placeholder">🔑</span></label>
                <input type="password" className="shadow appearance-none border rounded w-full py-3 px-4 cultiva-text-main leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="Mínimo 8 caracteres" />
              </div>
              <div className="mb-6">
                <label className="block cultiva-text-secondary text-sm font-bold mb-2">Confirmar Contraseña:</label>
                <input type="password" className="shadow appearance-none border rounded w-full py-3 px-4 cultiva-text-main leading-tight focus:outline-none focus:shadow-outline focus:border-green-500" placeholder="Repite tu contraseña" />
              </div>
              <div className="flex items-center justify-between">
                <button className="btn btn-primary w-full" type="button">Registrarme</button>
              </div>
            </form>
            <p className="text-center cultiva-text-secondary mt-4">¿Ya tienes cuenta? <button className="font-bold cultiva-green-secondary hover:text-green-700" onClick={() => setShowRegistro(false)}>Ingresa</button></p>
          </div>
        )}
      </div>
      <p className="text-center text-xs cultiva-text-secondary mt-6">
        Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.
      </p>
    </div>
  );
}