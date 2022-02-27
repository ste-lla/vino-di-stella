import { Routes, Route } from "react-router-dom";
import './Styles.css';
import Landing from './components/Landing';
import About from './components/About';
import Home from './components/Home';
import Wine from './components/Wine';

function App() {
  return (
    <div className="">
       <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/wine' element={<Wine/>}/>
      </Routes>
    </div>
  );
}

export default App;
