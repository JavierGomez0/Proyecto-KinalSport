import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage";
import { DashboardPage } from "../layout/DashboardPage.jsx";
import { Users } from "../../features/users/components/Users";
import { Fields } from "../../features/fields/components/Fields";
import { Reservations } from "../../features/reservations/components/Reservations";
import { Teams } from "../../features/teams/components/Teams";
import { Tournaments } from "../../features/tournaments/components/Tournaments";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<AuthPage />} />

            {/* Protegido por Role */}
            <Route path="/dashboard/*" element={<DashboardPage />} >
                <Route path="users" element={<Users />} />
                <Route path="fields" element={<Fields />} />
                <Route path="reservations" element={<Reservations />} />
                <Route path="teams" element={<Teams />} />
                <Route path="tournaments" element={<Tournaments />} />
            </Route>

            <Route path="*" element={<h1 className="text-center text-2xl font-bold">404 Page Not Found</h1>} />
        </Routes>
    );
}