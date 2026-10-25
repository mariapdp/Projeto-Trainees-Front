import { Link } from 'react-router-dom'
import { formatarData } from '../utils/datas'

const TAMANHO_PREVIA = 120

function CardAtualizacao({ atualizacao }) {
  const { id, titulo, conteudo, areas, dataPublicacao } = atualizacao
  const previa =
    conteudo.length > TAMANHO_PREVIA
      ? conteudo.slice(0, TAMANHO_PREVIA) + '…'
      : conteudo

  return (
    <Link to={`/atualizacao/${id}`} className="card">
      <h2>{titulo}</h2>
      <p>{previa}</p>
      <div className="card-rodape">
        <span className="tags">
          {areas.map((a) => (
            <span key={a} className="tag" data-area={a}>{a}</span>
          ))}
        </span>
        <time>{formatarData(dataPublicacao)}</time>
      </div>
    </Link>
  )
}

export default CardAtualizacao
