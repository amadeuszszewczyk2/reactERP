import React, { useState } from "react";
import "./App.css";
import LeftMenu from "./components/LeftMenu";
import TopMenu from "./components/TopMenu";
import Dashboard from "./modules/Dashboard";
import Modul2 from "./modules/Modul2";
import Modul3 from "./modules/Modul3";
import Modul4 from "./modules/Modul4";
import Modul5 from "./modules/Modul5";

function App() {
  const [selectedModule, setSelectedModule] = useState("dashboard");

  const renderModule = () => {
    switch (selectedModule) {
      case "dashboard":
        return <Dashboard setSelectedModule={setSelectedModule} />;
      case "modul2":
        return <Modul2 setSelectedModule={setSelectedModule} />;
      case "modul3":
        return <Modul3 setSelectedModule={setSelectedModule} />;
      case "modul4":
        return <Modul4 setSelectedModule={setSelectedModule} />;
      case "modul5":
        return <Modul5 setSelectedModule={setSelectedModule} />;
      default:
        return <Dashboard setSelectedModule={setSelectedModule} />;
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <TopMenu />
        <div className="App-main">
          <LeftMenu setSelectedModule={setSelectedModule} />
          <div className="App-content">{renderModule()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
