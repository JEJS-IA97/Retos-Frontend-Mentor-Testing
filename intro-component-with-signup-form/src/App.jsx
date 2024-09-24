import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  )
}

export default App
