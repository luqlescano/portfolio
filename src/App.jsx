import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App