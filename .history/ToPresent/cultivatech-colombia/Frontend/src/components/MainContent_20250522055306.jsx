import React from "react";
import IngresoRegistro from "./IngresoRegistro";
import Dashboard from "./Dashboard";
import Cultivos from "./Cultivos";
import Alertas from "./Alertas";
import Robot from "./Robot";

export default function MainContent({ currentPage }) {
  return (
    <main className="flex-1 cultiva-bg-light">
      {currentPage === "ingreso" && <IngresoRegistro />}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "cultivos" && <Cultivos />}
      {currentPage === "alertas" && <Alertas />}
      {currentPage === "robot" && <Robot />}
    </main>
  );
}import React from "react";
import IngresoRegistro from "./IngresoRegistro";
import Dashboard from "./Dashboard";
import Cultivos from "./Cultivos";
import Alertas from "./Alertas";
import Robot from "./Robot";

export default function MainContent({ currentPage }) {
  return (
    <main className="flex-1 cultiva-bg-light">
      {currentPage === "ingreso" && <IngresoRegistro />}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "cultivos" && <Cultivos />}
      {currentPage === "alertas" && <Alertas />}
      {currentPage === "robot" && <Robot />}
    </main>
  );
}