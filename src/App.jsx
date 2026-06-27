import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Jornadas } from './pages/Jornadas'
import { Novedades } from './pages/Novedades'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jornadas" element={<Jornadas />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
