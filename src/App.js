import "./App.css";
import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Tour from "./pages/Tour";

function App() {
  return (
    <BrowserRouter basename='/map-tour'>
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/vegas' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
