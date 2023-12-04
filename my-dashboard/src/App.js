import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TopNavigation from './Component/TopNavigation';
import Dashboard from './Component/Dashboard';
import CreateAd from './Component/Create Ad';
import AdsSubmitted from './Component/AdsSubmitted';
import AdDetails from './Component/Ad Details';
// ... import components

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/createad" element={<CreateAd />}/>
        <Route path="/" element={<TopNavigation />}/>
        <Route path="/addetails" element={<AdDetails/>}/>
        <Route path="/ad-submit" element={<AdsSubmitted />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
