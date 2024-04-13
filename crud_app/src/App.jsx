
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import User from './components/User'
import EditUser from './components/EditUser'

function App() {
 

  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path='/' element={<User/>} />
          <Route path='/add' element={<AddUser/>} />
          <Route path='/edit/:id' element={<EditUser/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
