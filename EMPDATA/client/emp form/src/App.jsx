
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Manager } from './pages'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/manager' element={<Manager/>}/>
      </Routes>
    </Router>

 
  )
}

export default App
