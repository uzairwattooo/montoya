"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "@/components/Dashboard";
import Applications from "@/components/Applications";
import Documents from "@/components/Documents";

const ClientDashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen md:h-screen flex flex-col md:flex-row bg-[#FAF6EF]">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <div className="flex-1 flex flex-col min-w-0">

                <Header
                    activePage={activePage}
                    setSidebarOpen={setSidebarOpen}
                />

                {activePage === "dashboard" && <Dashboard />}
                {activePage === "applications" && <Applications />}
                {activePage === "documents" && <Documents />}
            </div>
        </div>
    );
};

export default ClientDashboard;