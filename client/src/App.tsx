import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
