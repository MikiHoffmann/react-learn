import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Task1' element={<Task1/>}/>
      <Route path='/Task2' element={<Task2/>}/>
    </Routes>
  );
}

export default App;
