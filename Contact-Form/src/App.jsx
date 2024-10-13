import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App