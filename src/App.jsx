// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Component/Home';
// import { Register } from './Component/Reg.jsx';
// import { Privacy } from './Component/Privacy.jsx';
// // import Privacy from './Component/Privacy.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register/>} />
//         <Route path="/privacy" element={<Privacy />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import { Register } from './Component/Reg.jsx';
import Privacy from './Component/Privacy.jsx'; 
import Terms from './Component/Terms.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
