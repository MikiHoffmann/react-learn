import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Task1 from "./Pages/Task1";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Task1' element={<Task1/>}/>
    </Routes>
  );
}

export default App;
