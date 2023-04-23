
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './componenets/Blog';
import Blogelement from './componenets/Blogelement'



function App() {
  return (
    <>
    
      <BrowserRouter>
  
     
        <Routes>
         
        
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogelement' element={<Blogelement />} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
