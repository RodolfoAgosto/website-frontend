import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';
import Home from './pages/Home';
//import Projects from './pages/Projects';

function App() {
  return (
    <>      
      <Router>
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        </SidebarLayout>
      </Router>
    </>
  );
}

export default App;
