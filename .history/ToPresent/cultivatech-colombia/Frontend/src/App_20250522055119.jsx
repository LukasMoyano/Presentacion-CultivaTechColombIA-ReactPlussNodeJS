import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("ingreso");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMobileMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar currentPage={currentPage} onNav={setCurrentPage} />
        <MainContent currentPage={currentPage} />
      </div>
      <Footer />
    </div>
  );
}