import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ammonia from './Components/Ammonia';
import Butanal from './Components/Butanal';
import Carbon from './Components/Carbon';
import Engineered from './Components/Engineered';
import Ethanol from './Components/Ethanol';
import FAQs from './Components/FAQs';
import Footer from './Components/Footer';
import Formaldehyde from './Components/Formaldehyde';
import Header from './Components/Header';
import Humidity from './Components/Humidity';
import NasaInspired from './Components/NasaInspired';
import Nested from './Components/Nested';
import Nitrogen from './Components/Nitrogen';
import Overview from './Components/Overview';
import Particulate from './Components/Particulate';
import Privacy from './Components/Privacy';
import Specs from './Components/Specs';
import Terms from './Components/Terms';
import Tobacco from './Components/Tobacco';

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
        <Route path='/carbon' element={<Overview></Overview>} >
          <Route index element={<Carbon></Carbon>}></Route>
          <Route path='ammonia' element={<Ammonia></Ammonia>}></Route>
          <Route path='formaldehyde' element={<Formaldehyde></Formaldehyde>}></Route>
          <Route path='nitrogen' element={<Nitrogen></Nitrogen>}></Route>
          <Route path='butanal' element={<Butanal></Butanal>}></Route>
          <Route path='partiular' element={<Particulate></Particulate>}></Route>
          <Route path='ethanol' element={<Ethanol></Ethanol>}></Route>
          <Route path='tobacco' element={<Tobacco></Tobacco>}></Route>
          <Route path='humidity' element={<Humidity></Humidity>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
