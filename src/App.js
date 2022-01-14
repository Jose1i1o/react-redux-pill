import { Routes, Route } from 'react-router-dom'


import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <button>Click me</button>
    </Routes>
  );
};

export default App;
