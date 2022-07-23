import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './assets/stylesheets/application.scss'

function App() {
  return (
    <Router>
      <div className='site'>
        <Navbar />

        <div className='container mx-auto site-content'>
          <main className='pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
        </div>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
