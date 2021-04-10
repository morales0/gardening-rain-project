import {BrowserRouter as Router} from 'react-router-dom'
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar/>
      
      <div>
        Gardening!
      </div>
    </Router>
  );
}

export default App;
