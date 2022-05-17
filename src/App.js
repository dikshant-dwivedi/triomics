import GlobalCSS from './App.css.js';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import * as ROUTES from "./constants/routes"
import { THEME } from "./constants/themes"
import { Home } from "./pages"
import { NavBar } from "./components"
import { ContextWrapper } from "./AppContext"

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalCSS />
      <ContextWrapper>
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </ContextWrapper>
    </ThemeProvider>
  );
}

export default App;
