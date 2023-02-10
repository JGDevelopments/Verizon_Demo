import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import DashBox from "./scenes/DashBox";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline } from "@mui/material";
import Calendar from "./scenes/Gateways/calendar";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      {" "}
      {/* Might need to change this*/}
      <CssBaseline />
      <Topbar setIsSidebar={setIsSidebar} />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashbox" element={<DashBox />} />
            <Route path="/line" element={<Line />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
