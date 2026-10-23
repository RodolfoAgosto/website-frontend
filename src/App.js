import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';
import Home from './pages/Home';
import AnaviProject from './pages/AnaviProject';
import AuzoniaProject from './pages/AuzoniaProject';
import ScrollToTop from './components/ScrollToTop';
import { NavProvider } from "./context/NavContext";
import LiriumProject from './pages/LiriumProject';

function App() {
  return (
    <>
      <Router>
         <NavProvider>
        <ScrollToTop />       
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/lirium_project" element={<LiriumProject />} />
            <Route path="/pages/anavi_project" element={<AnaviProject />} />
            <Route path="/pages/auzonia_project" element={<AuzoniaProject />} />    
          </Routes>
        </SidebarLayout>
        </NavProvider>
      </Router>
    </>
  );
}

export default App;
