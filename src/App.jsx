import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/Index";
import RMNonTranslation from "./pages/rm-nontranslation/index";
import RMTranslation from "./pages/rm-translation/index";
import RMVendor from "./pages/rm-vendor/index";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resource-manager/translation" element={<RMTranslation />} />
            <Route path="/resource-manager/non-translation" element={<RMNonTranslation />} />
            <Route path="/resource-manager/vendor" element={<RMVendor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
