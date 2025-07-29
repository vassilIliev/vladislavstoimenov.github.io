import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Bio from './components/Bio'
import Theatre from './components/Theatre'
import Cinema from './components/Cinema'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/theatre" element={<Theatre />} />
            <Route path="/theatre/:projectId" element={<ProjectDetail />} />
            <Route path="/cinema" element={<Cinema />} />
            <Route path="/cinema/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 