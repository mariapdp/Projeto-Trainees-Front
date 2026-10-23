import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAtualizacoes } from '../context/AtualizacaoContext'
import CardAtualizacao from '../components/CardAtualizacao'
import { AREAS } from '../constants/config'

function dataLocal(iso) {
  return new Date(iso).toLocaleDateString('en-CA') // AAAA-MM-DD
}

function Feed() {
  const { atualizacoes } = useAtualizacoes()
  const [area, setArea] = useState('')
  const [busca, setBusca] = useState('')
  const [data, setData] = useState('')

  const termo = busca.trim().toLowerCase()
  const filtradas = atualizacoes.filter((a) => {
    if (area && !a.areas.includes(area)) return false
    if (termo && !a.titulo.toLowerCase().includes(termo) && !a.id.toLowerCase().includes(termo))
      return false
    if (data && dataLocal(a.dataPublicacao) !== data) return false
    return true
  })

  const limpar = () => {
    setArea('')
    setBusca('')
    setData('')
  }

  return (
    <section>
      <div className="feed-topo">
        <h1>Feed</h1>
        <Link to="/criar-atualizacao" className="botao">Nova atualização</Link>
      </div>

      <div className="filtros">
        <input
          type="search"
          placeholder="Buscar por título ou id"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">Todas as áreas</option>
          {AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        <button type="button" className="botao secundario" onClick={limpar}>
          Limpar filtros
        </button>
      </div>

      {atualizacoes.length === 0 ? (
        <p className="vazio">Nenhuma atualização ainda. Crie a primeira em “Nova atualização”.</p>
      ) : filtradas.length === 0 ? (
        <p className="vazio">Nenhuma atualização encontrada com esses filtros.</p>
      ) : (
        <div className="lista">
          {filtradas.map((a) => (
            <CardAtualizacao key={a.id} atualizacao={a} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Feed
