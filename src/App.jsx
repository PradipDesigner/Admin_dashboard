import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Header/>
      <Sidebar />
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
