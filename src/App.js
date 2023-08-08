import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Onchnageselect from './onchnageselect'
import ReactTable from './ReactTable'
// import './Datatable.css';
// import DataTable from './Datatable'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Onchnageselect/>}/>
        <Route path='/tablesd' element={<ReactTable/>}/>
      </Routes>
    </Router>
  )
}

export default App