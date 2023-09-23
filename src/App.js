import React, { useState } from "react";
import "./App.css";
import LeftMenu from "./components/LeftMenu";
import TopMenu from "./components/TopMenu";
import Dashboard from "./modules/Dashboard";
import Module2 from "./modules/Module2";
import Module3 from "./modules/Module3";
import Module4 from "./modules/Module4";
import Module5 from "./modules/Module5";
import Module6 from "./modules/Module6";
import Module7 from "./modules/Module7";
import Module8 from "./modules/Module8";
import Module9 from "./modules/Module9";

function App() {
  const [selectedModule, setSelectedModule] = useState("dashboard");

  const renderModule = () => {
    switch (selectedModule) {
      case "dashboard":
        return <Dashboard setSelectedModule={setSelectedModule} />;
      case "module2":
        return <Module2 setSelectedModule={setSelectedModule} />;
      case "module3":
        return <Module3 setSelectedModule={setSelectedModule} />;
      case "module4":
        return <Module4 setSelectedModule={setSelectedModule} />;
      case "module5":
        return <Module5 setSelectedModule={setSelectedModule} />;
      case "module6":
        return <Module6 setSelectedModule={setSelectedModule} />;
      case "module7":
        return <Module7 setSelectedModule={setSelectedModule} />;
      case "module8":
        return <Module8 setSelectedModule={setSelectedModule} />;
      case "module9":
        return <Module9 setSelectedModule={setSelectedModule} />;
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
