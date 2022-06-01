import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Countries from './component/Countries/Countries';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import NotFound from './component/NotFound/NotFound';
import CountryDetails from './component/CountryDetails/CountryDetails';
function App() {
  return (
    <div className="App">

      <Router>

        <Header></Header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="countries" element={<Countries/>}/>
          <Route path="country/:countryName" element={<CountryDetails/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
