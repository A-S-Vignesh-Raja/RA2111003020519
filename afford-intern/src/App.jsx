import Calculator from './calculator';
import {Route,Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>

          <Routes>
              <Route path='/calculator' element={<Calculator />}/>
          </Routes>
      

        
    </>
  )
}

export default App;
