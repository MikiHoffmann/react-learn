import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";
import Task3 from "./Pages/Task3";
import Task4 from './Pages/Task4';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Task1' element={<Task1/>}/>
      <Route path='/Task2' element={<Task2/>}/>
      <Route path='/Task3' element={<Task3/>}/>
      <Route path='/Task4' element={<Task4/>}/>
    </Routes>
  );
}

export default App;
