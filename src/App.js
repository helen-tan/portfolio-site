import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <h1 className='text-xl'>Hello World</h1>
    </Router>
  );
}

export default App;
