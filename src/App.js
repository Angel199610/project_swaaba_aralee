// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Cars from './pages/Cars';
import Transactions from './pages/Transactions';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
















// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Users from './pages/Users';
// import Cars from './pages/Cars';
// import Transactions from './pages/Transactions';

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/cars">Cars</Link> | <Link to="/transactions">Transactions</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/cars" element={<Cars />} />
//         <Route path="/transactions" element={<Transactions />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
