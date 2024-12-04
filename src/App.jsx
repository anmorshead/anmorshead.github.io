import './App.css'
import './index.css'
import Main from './components/Main'
import Projects from './components/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/projects" element={<Projects />}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App
