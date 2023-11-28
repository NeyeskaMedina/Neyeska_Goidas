import { ContextProvider } from "./context/UserContext";
import { Navbar } from "./components/Navbar";
import SectionAbout from "./components/SectionAbout";
import { NavegationTwo } from "./components/NavegationTwo";
import { About } from "./views/About";
import { Knowledge } from "./views/Knowledge";
import { Network } from "./views/Network";
import { Projects } from "./views/Projects";
import { Others } from "./views/Others";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <ContextProvider>
            <Navbar />
            <SectionAbout/>
            <NavegationTwo />

            <Routes>
                <Route
                  path="/"
                  element={<Projects/>}
                />
                <Route
                  path="/about"
                  element={<About/>}
                />
                <Route
                  path="/network"
                  element={<Network/>}
                />
                <Route
                  path="/knowledge"
                  element={<Knowledge/>}
                />
                <Route
                  path="/others"
                  element={<Others/>}
                />
            </Routes>
        </ContextProvider>
    </>
  )
}

export default App
