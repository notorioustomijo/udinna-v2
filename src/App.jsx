import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import Ods from './Projects/ODS/ODS';
import Healthbanc from './Projects/HealthBanc/Healthbanc';
import Agoge from './Projects/Agoge/Agoge';
// import Washryte from './Projects/WashRyte/Washryte';
// import Frutta from './Projects/Frutta/Frutta';
// import LandGirl from './Projects/LandGirl/LandGirl';
// import DelightVet from './Projects/DelightVet/DelightVet';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/one-drug-store" element={<Ods />} />
          <Route path="/projects/healthbanc" element={<Healthbanc />} />
          <Route path="/projects/agoge" element={<Agoge />} />
          {/* <Route path="/projects/washryte" element={<Washryte />} /> */}
          {/* <Route path="/projects/frutta" element={<Frutta />} /> */}
          {/* <Route path="/projects/landgirl" element={<LandGirl />} /> */}
          {/* <Route path="/projects/delight-vet" element={<DelightVet />} /> */}
        </Routes>
      </Router>
  )
}

export default App
