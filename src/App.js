import { Route, Routes } from 'react-router-dom';
import './App.css';
import Engineered from './Components/Engineered';
import FAQs from './Components/FAQs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NasaInspired from './Components/NasaInspired';
import Nested from './Components/Nested';
import Overview from './Components/Overview';
import Privacy from './Components/Privacy';
import Specs from './Components/Specs';
import Terms from './Components/Terms';

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
        <Route path='/privacy' element={<Privacy></Privacy>} ></Route>
        <Route path='/terms' element={<Terms></Terms>} ></Route>
        <Route path='/nested' element={<Nested></Nested>} ></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
