import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Feed from './pages/Feed'
import CriarAtualizacao from './pages/CriarAtualizacao'
import VisualizarAtualizacao from './pages/VisualizarAtualizacao'
import EditarAtualizacao from './pages/EditarAtualizacao'

function App() {
  return (
    <>
      <header className="topo">
        <Link to="/feed" className="marca">Atualizações das áreas</Link>
      </header>
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/criar-atualizacao" element={<CriarAtualizacao />} />
          <Route path="/atualizacao/:id" element={<VisualizarAtualizacao />} />
          <Route path="/atualizacao/:id/editar" element={<EditarAtualizacao />} />
          <Route
            path="*"
            element={
              <p>
                Página não encontrada. <Link to="/feed">Voltar ao feed</Link>
              </p>
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App
