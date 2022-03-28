// import './App.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './pages/main';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routing/>
      </header>
    </div>
  );
}

export default App;
