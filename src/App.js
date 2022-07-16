import { Route, Routes } from 'react-router-dom';
import './App.css';
import Engineered from './Components/Engineered';
import FAQs from './Components/FAQs';
import Header from './Components/Header';
import NasaInspired from './Components/NasaInspired';
import Overview from './Components/Overview';
import Specs from './Components/Specs';

function App() {
  return (
    <div className='body '>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Overview></Overview>} ></Route>
        <Route path='/home' element={<Overview></Overview>} >
          <Route index element={<NasaInspired></NasaInspired>}></Route>
          <Route path='engineered' element={<Engineered></Engineered>}></Route>
        </Route>
        <Route path='/Specs' element={<Specs></Specs>} ></Route>
        <Route path='/FAQs' element={<FAQs></FAQs>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
