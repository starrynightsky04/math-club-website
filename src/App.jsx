import { Routes, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar.jsx'
import Subscribe from './Layout/Subscribe.jsx'
import Footer from './Layout/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Events from './Pages/Events.jsx'
import Officers from './Pages/Officers.jsx'
import Join from './Pages/Join.jsx'
import Contact from './Pages/Contact.jsx'
import Donate from './Pages/Donate.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Subscribe />
      <Footer />
    </div>
  )
}
