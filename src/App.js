import './App.css';
import { Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Student from './Components/Student';
import Home from './Components/Home';
import Navbar from './Components/Navbar';



function App(){
  return (
    <>
    <Navbar/>
      <Routes>
        <Route Path = '/' element = {<Navbar />} />
        <Route path = '/home' element = {< Home />} />
        <Route path = '/student' element = {< Student />} />
        <Route path = '/contact' element = {< Contact />} /> 
      </Routes>
    </>
  )
}

export default App;