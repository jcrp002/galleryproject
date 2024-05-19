import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ckratos1 from './Components/Ckratos1';
import Ckratos3 from './Components/Ckratos3';
import Ckratos2 from './Components/Ckratos2';
import Ckratos4 from './Components/Ckratos4';
import Ckratos5 from './Components/Ckratos5';
import Ckratos6 from './Components/Ckratos6';
import Ckratos7 from './Components/Ckratos7';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>

        <Navigation/>
<div>
      <Routes>
        <Route path="/ckratos1" Component={Ckratos1}/>
        <Route path="/ckratos2" Component={Ckratos2}/>
        <Route path="/ckratos3" Component={Ckratos3}/>
        <Route path="/ckratos4" Component={Ckratos4}/>
        <Route path="/ckratos5" Component={Ckratos5}/>
        <Route path="/ckratos6" Component={Ckratos6}/>
        <Route path="/ckratos7" Component={Ckratos7}/>
      </Routes>
</div>     
      
     
    </Router>
  );
}

export default App;
