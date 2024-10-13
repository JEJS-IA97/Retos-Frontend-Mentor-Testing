import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cart from "./cart"

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
      </Routes>
    </Router>
   
  )
}

export default App
