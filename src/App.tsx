import Layout from './routes/Layout'
import Home from './routes/Home'
import Projects from './routes/Projects'
import About from './routes/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
