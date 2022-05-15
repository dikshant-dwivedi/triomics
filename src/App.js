import GlobalCSS from './App.css.js';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import * as ROUTES from "./constants/routes"
import { THEME } from "./constants/themes"
import { Home } from "./pages"
import { NavBar } from "./components"

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalCSS />
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
