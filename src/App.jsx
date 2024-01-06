import React from "react";
import Navbar from "./scenes/global/navbar/Navbar";
import Sidebar from "./scenes/global/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />

          <main className="content">
            <Navbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
