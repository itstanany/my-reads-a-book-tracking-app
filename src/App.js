import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import './App.css';

const App = () => {
  return (
    <Router basename="/my-reads-a-book-tracking-app">
      <Page />
    </Router>
  )
}

export default App;
