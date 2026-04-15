import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Fields } from "../../../features/fields/components/Fields";
import { FieldModal } from "../../../features/fields/components/FieldModal";
import { Teams } from "../../../features/teams/components/Teams";
import { Reservations } from "../../../features/reservations/components/Reservations";
import{ TeamModal } from "../../../features/teams/components/TeamModal";
import { TournamentModal } from "../../../features/tournaments/components/TournamentModal";
import { Tournaments } from "../../../features/tournaments/components/Tournaments";
import { FieldsAdmin } from "../../../features/userAdmin/components/Fields";
import { ReservationsAdmin } from "../../../features/userAdmin/components/Reservations";
import { TeamsAdmin } from "../../../features/userAdmin/components/Teams";
import { TournamentsAdmin } from "../../../features/userAdmin/components/Tournamenst";
import { Settings } from "../../../features/userManagement/components/Settings";
import { CreateUserModal } from "../../../features/users/components/CreateUserModal";
import { SettingsUser } from "../../../features/users/components/SettingsUser";
import { UserComboBox } from "../../../features/users/components/UserComboBox";
import { UserDetailModal } from "../../../features/users/components/UserDetailModal";
import { Users } from "../../../features/users/components/Users";

export const DashboardContainer = () => {

  return(
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1 p-6">
          {/* Children */}
          {/* <Fields /> */}
          {/* <FieldModal /> */}
          {/* <Reservations />*/}
          {/* <Teams /> */}
          {/* <TeamModal /> */}
          {/* <TournamentModal /> */}
          {/* <Tournaments /> */}
          {/* <FieldsAdmin /> */}
          {/* <ReservationsAdmin />*/}
          {/* <TeamsAdmin /> */}
          {/* <TournamentsAdmin /> */}
          {/* <Settings /> */}
          {/* <CreateUserModal /> */}
          {/* <SettingsUser /> */}
          {/* <TeamsUser /> */}
          {/* <UserComboBox /> */}
          {/* <UserDetailModal /> */}
          {/* <Users /> */}
        </main>
      </div>
    </div>
  );
}