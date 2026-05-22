"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../../components/Dashboard";
import Applications from "../../components/Applications";
import Documents from "../../components/Documents";
import { authClient } from "../../lib/auth-client";
import { supabase } from "../../lib/supabase";

const ClientDashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [applications, setApplications] = useState([]);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const fetchApplications = async () => {
            const session = await authClient.getSession();
            const user = session?.data?.user;
            if (!user) return;
            setUserName(user.name || "User");
            const { data: home } = await supabase.from("home_loan_applications").select("*").eq("user_id", user.id);
            const { data: devLoan } = await supabase.from("development_loan_applications").select("*").eq("user_id", user.id);
            const { data: devPartner } = await supabase.from("development_partnership_applications").select("*").eq("user_id", user.id);
            const { data: international } = await supabase.from("international_development_applications").select("*").eq("user_id", user.id);
            const allApps = [
                ...(home || []).map((app) => ({
                    ...app,
                    name: "Home Loan Application",
                    type: "Finance",
                })),
                ...(devLoan || []).map((app) => ({
                    ...app,
                    name: "Development Loan Application",
                    type: "Finance",
                })),
                ...(devPartner || []).map((app) => ({
                    ...app,
                    name: "Development Partnership",
                    type: "Development",
                })),
                ...(international || []).map((app) => ({
                    ...app,
                    name: "International Development",
                    type: "International",
                })),
            ];
            setApplications(allApps);
        
        };
        fetchApplications();
    }, [])

    return (
        <div className="min-h-screen md:h-screen flex flex-col md:flex-row bg-[#FAF6EF]">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                userName={userName}

            />
            <div className="flex-1 flex flex-col min-w-0">

                <Header
                    activePage={activePage}
                    setSidebarOpen={setSidebarOpen}
                    userName={userName}
                />

                {activePage === "dashboard" && <Dashboard applications={applications} userName={userName} />}
                {activePage === "applications" && <Applications applications={applications} />}
                {activePage === "documents" && <Documents applications={applications} />}
            </div>
        </div>
    );
};

export default ClientDashboard;