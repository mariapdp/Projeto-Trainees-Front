import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAtualizacoes } from '../context/AtualizacaoContext'
import { formatarData } from '../components/CardAtualizacao'

function VisualizarAtualizacao() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { buscarAtualizacao, excluirAtualizacao } = useAtualizacoes()
  const atualizacao = buscarAtualizacao(id)

  if (!atualizacao) {
    return (
      <p>
        Atualização não encontrada. <Link to="/feed">Voltar ao feed</Link>
      </p>
    )
  }

  const excluir = () => {
    if (window.confirm('Excluir esta atualização? Essa ação é permanente.')) {
      excluirAtualizacao(id)
      navigate('/feed')
    }
  }

  return (
    <article>
      <Link to="/feed">← Voltar ao feed</Link>
      <h1>{atualizacao.titulo}</h1>
      <p className="meta">
        <span className="tags">
          {atualizacao.areas.map((a) => (
            <span key={a} className="tag">{a}</span>
          ))}
        </span>
        <time>Publicado em {formatarData(atualizacao.dataPublicacao)}</time>
      </p>
      <p className="meta">Id: {atualizacao.id}</p>
      <p className="texto">{atualizacao.conteudo}</p>
      <div className="acoes">
        <Link to={`/atualizacao/${id}/editar`} className="botao">Editar</Link>
        <button type="button" className="botao perigo" onClick={excluir}>Excluir</button>
      </div>
    </article>
  )
}

export default VisualizarAtualizacao
