
import {Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Create from './pages/create/Create';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />

      </Routes>
    </div>
  );
}

export default App;
