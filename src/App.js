import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="">
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
