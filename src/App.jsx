import DetailMuseum from './pages/DetailMuseum'
import Museum from './pages/Museum'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Museum />}/>
            <Route path="/museum/" element={<Museum />}/>
            <Route path="/museum/:id" element={<DetailMuseum />}/>
          </Routes>
        </BrowserRouter>
        
       
      
  )
}

export default App
