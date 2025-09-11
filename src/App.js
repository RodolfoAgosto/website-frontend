import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';
import Home from './pages/Home';
import AuzoniaProject from './pages/AuzoniaProject';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />       
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/auzonia_project" element={<AuzoniaProject />} />
          </Routes>
        </SidebarLayout>
      </Router>
    </>
  );
}

export default App;
