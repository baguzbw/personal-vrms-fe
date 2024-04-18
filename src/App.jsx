import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/CompSide/Sidebar";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/dashboard/ViewDashboard";
import MDFinancial from "./pages/md/md-financial";
import MDRate from "./pages/md/md-rate";
import MDTools from "./pages/md/md-tools";
import MDNonTranslation from "./pages/md/vif/md-nontranslation";
import MDTranslation from "./pages/md/vif/md-translation";
import MDVendor from "./pages/md/vif/md-vendor";
import RecordLog from "./pages/rl/ViewRL";
import RMNonTranslation from "./pages/rm/rm-nontranslation/ViewRM-NT";
import RMTranslation from "./pages/rm/rm-translation/ViewRM-T";
import RMVendor from "./pages/rm/rm-vendor/ViewRM-V";
import SystemAdministrator from "./pages/sa/ViewSa";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/master-data/vendor" element={<MDVendor />} />
            <Route path="/master-data/translation" element={<MDTranslation />} />
            <Route path="/master-data/non-translation" element={<MDNonTranslation />} />
            <Route path="/master-data/rate" element={<MDRate />} />
            <Route path="/master-data/tools" element={<MDTools />} />
            <Route path="/master-data/financial-directory" element={<MDFinancial />} />
            <Route path="/resource-manager/vendor" element={<RMVendor />} />
            <Route path="/resource-manager/translation" element={<RMTranslation />} />
            <Route path="/resource-manager/non-translation" element={<RMNonTranslation />} />
            <Route path="/record-log" element={<RecordLog />} />
            <Route path="/system-administrator" element={<SystemAdministrator />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
